import { Button, Input } from "antd";
import React from "react";
import "./chatInput.css";
import { useSelector } from "react-redux";

const ChatInput = ({ sendNewMessage, onChangeNewMessage }) => {
  const { newMessage } = useSelector((state) => state.chat);

  return (
    <div className="chat-input-container row center">
      <Input
        value={newMessage}
        size="large"
        style={{ width: "80%" }}
        onChange={(e) => onChangeNewMessage(e.target.value)}
      />
      <Button
        style={{ backgroundColor: "#3365e1" }}
        size="large"
        type="primary"
        onClick={() => {
          if (newMessage) sendNewMessage(newMessage);
        }}
      >
        SEND
      </Button>
    </div>
  );
};

export default ChatInput;
