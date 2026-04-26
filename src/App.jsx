import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Disposition from "./Disposition";

const VueUnivers = lazy(() => import("./composants/sections/univers/VueUnivers"));
const VueFactions = lazy(() => import("./composants/sections/VueFactions"));
const VueAntagoniste = lazy(() => import("./composants/sections/VueAntagoniste"));
const VueScenarios = lazy(() => import("./composants/sections/scenarios/VueScenarios"));
const VueScenariosAnnexes = lazy(() => import("./composants/sections/quetes/VueScenariosAnnexes"));

/**
 * Composant ChargementRoute - Fallback affiché pendant le chargement lazy des routes
 */
function ChargementRoute() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="text-content-muted text-sm uppercase tracking-widest animate-pulse">
        Chargement…
      </div>
    </div>
  );
}

/**
 * Composant App - Point d'entrée de l'application
 * Définit les routes principales de l'application
 */
function App() {
  return (
    <Routes>
      <Route element={<Disposition />}>
        <Route index element={<Navigate to="/univers" replace />} />
        <Route path="/univers" element={<Suspense fallback={<ChargementRoute />}><VueUnivers /></Suspense>} />
        <Route path="/factions" element={<Suspense fallback={<ChargementRoute />}><VueFactions /></Suspense>} />
        <Route path="/antagoniste" element={<Suspense fallback={<ChargementRoute />}><VueAntagoniste /></Suspense>} />
        <Route path="/scenarios" element={<Suspense fallback={<ChargementRoute />}><VueScenarios /></Suspense>} />
        <Route path="/scenarios/:id" element={<Suspense fallback={<ChargementRoute />}><VueScenarios /></Suspense>} />
        <Route path="/scenarios-annexes" element={<Suspense fallback={<ChargementRoute />}><VueScenariosAnnexes /></Suspense>} />
        <Route path="*" element={<Navigate to="/univers" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
