import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ThirdPerson } from "./pages/ThirdPerson";
import { RetroHack } from "./pages/RetroHack";
import { Synergy } from "./pages/Synergy";
import { KindledSpirits } from "./pages/KindledSpirits";
import { CrystalRunner } from "./pages/CrystalRunner";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/third-person" element={<ThirdPerson />} />
        <Route path="/projects/retrohack" element={<RetroHack />} />
        <Route path="/projects/synergy" element={<Synergy />} />
        <Route path="/projects/kindled-spirits" element={<KindledSpirits />} />
        <Route path="/projects/crystal-runner" element={<CrystalRunner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
