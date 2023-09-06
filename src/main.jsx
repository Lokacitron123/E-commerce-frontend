import React from "react";
import ReactDOM from "react-dom/client";
import "./global.scss";
// Components
import App from "./App.jsx";

//Context

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
