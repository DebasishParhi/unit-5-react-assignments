import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { ToggleContectProvider } from "./components/context/toggleContext";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <ToggleContectProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ToggleContectProvider>
  </React.StrictMode>,
  document.getElementById("root")
);