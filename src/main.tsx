import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// BrowserRouter 与 HashRouter 的区别
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./tailwind.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
