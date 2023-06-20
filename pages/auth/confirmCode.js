import React, { useState, useRef } from "react";

const ConfirmCodePage = () => {
  const [confirmCode, setConfirmCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  const handleConfirmCode = (event) => {
    event.preventDefault();
    console.log(confirmCode.join(""));
    // TODO: Confirm code logic
  };

  const handleChangeCode = (event, index) => {
    const code = event.target.value;

    setConfirmCode((prevCode) => {
      const newCode = [...prevCode];
      newCode[index] = code;
      return newCode;
    });

    // Otomatik olarak bir sonraki kutuya geç
    if (code !== "" && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-8 text-primary">Confirm Code</h1>
      <form onSubmit={handleConfirmCode}>
        <div className="flex items-center mb-4">
          {Array.from(Array(6)).map((_, index) => (
            <input
              key={index}
              type="text"
              className="w-12 h-12 border border-gray-300 rounded-md text-2xl text-center mr-2 focus:outline-none focus:ring-2 focus:ring-primary bg-transparent text-white"
              maxLength={1}
              value={confirmCode[index]}
              onChange={(event) => handleChangeCode(event, index)}
              ref={(ref) => (inputRefs.current[index] = ref)}
              required
            />
          ))}
        </div>
        <button
          type="submit"
          className="bg-primary text-white px-6 py-2 rounded-md focus:outline-none hover:bg-primary-dark"
        >
          Confirm
        </button>
      </form>
    </div>
  );
};

export default ConfirmCodePage;
