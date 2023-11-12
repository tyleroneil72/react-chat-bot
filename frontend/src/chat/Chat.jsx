import React, { useState, useEffect, useRef } from "react";

import ChatBody from "../components/ChatBody";
import ChatInput from "../components/ChatInput";

const Chat = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isChatbotTyping, setIsChatbotTyping] = useState(false);
  const [typingIntervalId, setTypingIntervalId] = useState(null);
  const [typingIndicatorMessage, setTypingIndicatorMessage] =
    useState("Typing");
  const EXPRESS_PORT = 3000; // Port that the Express server is running on

  const firstRender = useRef(true); // Using useRef to check the first render

  const displayUserMessage = (message) => {
    // Add the user's message to the chat messages
    setChatMessages((prevChatMessages) => [
      ...prevChatMessages,
      { message, type: "user" },
    ]);
    // Clear the input field
    setUserInput("");
  };

  const displayChatbotMessage = (message) => {
    if (isChatbotTyping) {
      clearInterval(typingIntervalId);
      setIsChatbotTyping(false);
    }

    setChatMessages((prevChatMessages) => [
      ...prevChatMessages,
      { message, type: "chatbot" },
    ]);
  };
  // Typing indicator logic
  const displayTypingIndicator = () => {
    if (!isChatbotTyping) {
      setIsChatbotTyping(true);
      clearInterval(typingIntervalId); // Clear the interval before setting a new one
      const intervalId = setInterval(() => {
        setTypingIndicatorMessage((prevMessage) => {
          if (prevMessage === "Typing...") {
            return "Typing";
          } else if (prevMessage === "Typing") {
            return "Typing.";
          } else if (prevMessage === "Typing.") {
            return "Typing..";
          } else if (prevMessage === "Typing..") {
            return "Typing...";
          }
        });
      }, 400);
      setTypingIntervalId(intervalId);
    }
  };

  const sendMessage = async () => {
    if (userInput.trim() === "") {
      return;
    }
    displayUserMessage(userInput);
    displayTypingIndicator();

    try {
      // Send the user's message to the Express server to be processed by the chatbot
      const response = await fetch(`http://127.0.0.1:${EXPRESS_PORT}/message`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userInput }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      displayChatbotMessage(data.message);
      setIsChatbotTyping(false); // Set typing indicator to false after receiving the response
    } catch (error) {
      console.error("Error:", error);
      displayChatbotMessage(`Sorry an error has occurred... (${error})`);
      setIsChatbotTyping(false); // Set typing indicator to false if an error occurs
    }
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };
  // Send message when the user presses the enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };
  // Display welcome message on first render
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      displayChatbotMessage(
        `Hi, I'm a Chat Bot. What can I help you with today?`
      );
    }
  }, [firstRender]);

  return (
    <div className='chat-container'>
      <div className='chat-title'>Chatbot</div>
      <ChatBody
        chatMessages={chatMessages}
        isChatbotTyping={isChatbotTyping}
        typingIndicatorMessage={typingIndicatorMessage}
      />
      <ChatInput
        value={userInput}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder='Type your message here...'
        onClick={sendMessage}
      />
    </div>
  );
};

export default Chat;
