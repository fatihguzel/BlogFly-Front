import { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import Head from "next/head";

const ChatPage = () => {
  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [roomName, setRoomName] = useState("");
  const [senderName, setSenderName] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  const sendMessage = () => {
    if (socket && message) {
      socket.emit("message", { room: roomName, message, sender: senderName });
      setMessage("");
    }
  };

  useEffect(() => {
    const socket = io("http://localhost:5000");
    setSocket(socket);

    socket.on("connect", () => {
      socket.emit("joinRoom", roomName);
    });

    socket.on("message", (data) => {
      setChatMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socket.disconnect();
    };
  }, [roomName]);

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  return (
    <div className="flex flex-col h-screen bg-gray-400">
      {/* <Head>
        <title>Chat Uygulaması - Oda: {roomName}</title>
      </Head> */}
      <div className="flex-grow flex flex-col overflow-y-auto p-4">
        {chatMessages.map((msg, index) => (
          <div
            key={index}
            className={`flex mb-2 ${
              msg.sender === senderName ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-sm rounded-lg p-3 ${
                msg.sender === senderName
                  ? "bg-blue-500 text-white self-end"
                  : "bg-white text-gray-800 self-start"
              }`}
            >
              <span className="text-gray-600 font-semibold">{msg.sender}</span>
              <p className="text-sm">{msg.message}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 bg-gray-600">
        <div className="flex flex-col gap-y-12 rounded-full ">
          <div className="w-full">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 mb-2 sm:mb-0 sm:mr-2 focus:outline-none text-gray-800 bg-gray-100 rounded-l-full"
              placeholder="Mesajınızı yazın..."
            />
          </div>

          <div className="flex flex-row justify-between">
            <button
              onClick={sendMessage}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition-colors duration-300"
            >
              Gönder
            </button>
            <div>
              <input
                type="text"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
                className="px-4 py-2 mb-2 sm:mb-0 sm:mx-2 focus:outline-none text-gray-800 bg-gray-100"
                placeholder="Oda adını girin..."
              />
              <input
                type="text"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                className="px-4 py-2 mb-2 sm:mb-0 sm:ml-2 focus:outline-none text-gray-800 bg-gray-100 rounded-r-full"
                placeholder="Kullanıcı adınızı giriniz..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
