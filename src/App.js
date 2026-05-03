import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ThirdPerson } from "./pages/ThirdPerson";
import { CrystalRunner } from "./pages/CrystalRunner";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/third-person" element={<ThirdPerson />} />
        <Route path="/projects/crystal-runner" element={<CrystalRunner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
