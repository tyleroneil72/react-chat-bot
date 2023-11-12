import React from "react";
import "../css/Message.css";

const Message = ({ message, type }) => {
  return (
    // Class is set to either user-message or chatbot-message depending on the type prop
    <div className={type === "user" ? "user-message" : "chatbot-message"}>
      {message}
    </div>
  );
};

export default Message;
