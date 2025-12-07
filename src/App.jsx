import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import UniverseView from "./components/sections/Universe/UniverseView";
import FactionsView from "./components/sections/FactionsView";
import AntagonistView from "./components/sections/AntagonistView";
import ScenariosView from "./components/sections/Scenarios/ScenariosView";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to="/univers" replace />} />
        <Route path="/univers" element={<UniverseView />} />
        <Route path="/factions" element={<FactionsView />} />
        <Route path="/antagoniste" element={<AntagonistView />} />
        <Route path="/scenarios" element={<ScenariosView />} />
        <Route path="/scenarios/:id" element={<ScenariosView />} />
        <Route path="*" element={<Navigate to="/univers" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
