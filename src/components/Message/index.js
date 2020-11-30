import React from "react";
import "./message.css";

const Message = ({ message }) => {
  return (
    <>
      <div
        className={`msg-sender ${
          message.from === localStorage.getItem("username")
            ? "sent-container"
            : "reciver-container"
        }`}
      >
        {message.from}
      </div>
      <div
        className={`message-container row sent-container ${
          message.from === localStorage.getItem("username")
            ? "sent-container"
            : "reciver-container"
        }`}
      >
        <div
          className={`message-content ${
            message.from === localStorage.getItem("username")
              ? "sent"
              : "recived"
          }`}
        >
          {message.message}
        </div>
      </div>
    </>
  );
};

export default Message;
