import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/index.css";
import DailyProvider from "./components/Daily/Context";
import FluffyProvider from "./components/Fluffy/Context";

ReactDOM.render(
  <React.StrictMode>
    <DailyProvider>
    <FluffyProvider>
      <App />
    </FluffyProvider>
    </DailyProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
