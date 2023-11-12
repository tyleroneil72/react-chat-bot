import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // StrictMode is a tool for highlighting potential problems in an application during development.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
