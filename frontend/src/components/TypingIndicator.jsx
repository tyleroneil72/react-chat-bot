import React from "react";
import "../css/TypingIndicator.css";

const TypingIndicator = ({ typingIndicatorMessage }) => {
  return <div className='typing-indicator'>{typingIndicatorMessage}</div>;
};

export default TypingIndicator;
