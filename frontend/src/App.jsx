import React from "react";
import Chat from "./chat/Chat.jsx";
import Footer from "./components/Footer.jsx";
import "./css/App.css";
// The main App component
const App = () => {
  return (
    // Using React fragments to avoid unnecessary divs
    <>
      <main>
        <Chat />
      </main>
      <Footer />
    </>
  );
};

export default App;
