import React from "react";
import "../css/TypingIndicator.css";

const TypingIndicator = ({ typingIndicatorMessage }) => {
  // Renders the typing indicator with the correct message
  return <div className='typing-indicator'>{typingIndicatorMessage}</div>;
};

export default TypingIndicator;
