import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { scenariosData } from "./data/scenarios/scenarios";
import { migrerClesScenes } from "./utilitaires/sceneUtils";

migrerClesScenes(scenariosData);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
);
