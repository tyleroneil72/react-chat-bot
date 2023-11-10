import React from "react";
import "../css/ChatInput.css";

const ChatInput = ({ value, onChange, onKeyDown, placeholder, onClick }) => {
  return (
    <div className='chat-footer'>
      <input
        type='text'
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
      />
      <button id='send-button' onClick={onClick}>
        Send
      </button>
    </div>
  );
};

export default ChatInput;
