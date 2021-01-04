import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/index.css";
import DailyProvider from "./components/Daily/Context";

ReactDOM.render(
  <React.StrictMode>
    <DailyProvider>
      <App />
    </DailyProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
