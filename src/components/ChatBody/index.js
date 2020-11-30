import React, { useRef, useEffect } from "react";
import Message from "../Message";
import "./chatBody.css";
import ScrollToBottom from "react-scroll-to-bottom";

const ChatBody = ({ data }) => {
  return (
    <ScrollToBottom className="chat-body-container">
      {data.map((message, i) => (
        <Message message={message} key={i} />
      ))}
    </ScrollToBottom>
  );
};

export default ChatBody;
