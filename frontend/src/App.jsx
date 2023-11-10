import React from "react";
import Chat from "./chat/Chat.jsx";
import Footer from "./components/Footer.jsx";
import "./css/App.css";

const App = () => {
  return (
    <>
      <main>
        <Chat />
      </main>
      <Footer />
    </>
  );
};

export default App;
