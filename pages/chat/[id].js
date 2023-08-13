import axios from "axios";
import Head from "next/head";
import { useEffect, useState, useRef, use } from "react";
import { useSelector } from "react-redux";
import io from "socket.io-client";

const ChatPage = ({ id, roomInformation, chatUsers }) => {
  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState(null);
  const [chatMessages, setChatMessages] = useState(
    roomInformation.data.messages || []
  );
  const user_id = useSelector((state) => state.auth.user._id);
  const userName = useSelector((state) => state.auth.user.username);
  const [sender, setSender] = useState({});
  const [receiver, setReceiver] = useState({});
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  const sendMessage = () => {
    if (socket && message) {
      socket.emit("message", { room: id, message, sender: user_id });
      setMessage("");

      const newSender = chatUsers.find((user) => user._id === user_id);
      const newReceiver = chatUsers.find((user) => user._id !== user_id);
      setSender(newSender);
      setReceiver(newReceiver);
    }
  };

  useEffect(() => {
    const socket = io("http://localhost:5000");
    setSocket(socket);

    socket.on("connect", () => {
      socket.emit("joinRoom", id);
    });

    socket.on("message", (data) => {
      console.log("data", data);
      setChatMessages((prev) => [
        ...prev,
        {
          message: data.message,
          user: data.sender,
        },
      ]);
    });

    return () => {
      socket.disconnect();
    };
  }, [id]);

  useEffect(() => {
    const separateUsers = () => {
      const newSender = chatUsers.find((user) => user._id === user_id);
      const newReceiver = chatUsers.find((user) => user._id !== user_id);
      setSender(newSender);
      setReceiver(newReceiver);
    };

    separateUsers();
  }, [chatUsers, user_id]);

  console.log("sender", sender);
  useEffect(() => {}, [sender]);

  return (
    <div className="flex flex-col h-screen bg-gray-400">
      <Head>
        <title>Oda: {id}</title>
      </Head>
      <div className="flex-grow flex flex-col overflow-y-auto p-4">
        {chatMessages.map((msg, index) => (
          <div
            key={index}
            className={`flex mb-2 ${
              msg.user === user_id ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-sm rounded-lg p-3 ${
                msg.user === user_id
                  ? "bg-blue-500 text-white self-end"
                  : "bg-white text-gray-800 self-start"
              }`}
            >
              <span className="text-gray-600 font-semibold">
                {msg.user === user_id ? sender?.username : receiver?.username}
              </span>
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
              {/* <input
                type="text"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                className="px-4 py-2 mb-2 sm:mb-0 sm:ml-2 focus:outline-none text-gray-800 bg-gray-100 rounded-r-full"
                placeholder="Kullanıcı adınızı giriniz..."
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;

export const getServerSideProps = async ({ params, req }) => {
  const { id } = params;

  const res = await axios.get(
    `${process.env.API_URL}/room/get-room-message/${id}`,
    {
      withCredentials: true,
    }
  );

  const chatUsers = [];

  // Kullanıcı bilgilerini toplamak için Promise.all kullanarak bekleyelim
  await Promise.all(
    res.data.data.users.map(async (user) => {
      const response = await axios.get(
        `${process.env.API_URL}/auth/getUserById/${user}`
      );

      // gelen datayı obje içine atıyoruz
      chatUsers.push(response.data.data);
    })
  );

  return {
    props: { id, roomInformation: res.data, chatUsers },
  };
};
