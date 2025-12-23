import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import "./utils/i18n";

const basename = import.meta.env.BASE_URL || "/";
const redirectPath = sessionStorage.getItem("redirect");

if (redirectPath) {
  sessionStorage.removeItem("redirect");
  const url = new URL(window.location);
  url.pathname = redirectPath;
  window.history.replaceState(null, "", url);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
