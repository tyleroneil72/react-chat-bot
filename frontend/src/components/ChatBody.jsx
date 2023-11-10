import React from "react";
import Message from "./Message.jsx";
import TypingIndicator from "./TypingIndicator.jsx";
import "../css/ChatBody.css";

const ChatBody = ({
  chatMessages,
  isChatbotTyping,
  typingIndicatorMessage,
}) => {
  return (
    <div className='chat-body' id='chat-body'>
      {chatMessages.map((chat, index) => (
        <Message key={index} message={chat.message} type={chat.type} />
      ))}
      {isChatbotTyping && (
        <TypingIndicator typingIndicatorMessage={typingIndicatorMessage} />
      )}
    </div>
  );
};

export default ChatBody;
