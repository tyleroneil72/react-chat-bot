import React from "react";
import "../css/Message.css";

const Message = ({ message, type }) => {
  return (
    <div className={type === "user" ? "user-message" : "chatbot-message"}>
      {message}
    </div>
  );
};

export default Message;
