import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThirdPerson } from "./pages/ThirdPerson";
import { Home } from "./pages/Home";
import { ToonTank } from "./pages/ToonTank";
import { ThirdpersonShooter } from "./pages/ThirdPersonShooter";
import { RetroHack } from "./pages/RetroHack";
import { Synergy } from "./pages/Synergy";
import { KindledSpirits } from "./pages/KindledSpirits";
import { CrystalRunner } from "./pages/CrystalRunner";
import { ScrollToTop } from "./components/ScrollToTop";
import { ScrollToHash } from "./components/ScrollToHash";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToHash />
        <Home />
      </>
    ),
    exact: true,
  },
  {
    path: "/projects/toon-tank",
    element: (
      <>
        <ScrollToTop />
        <ToonTank />
      </>
    ),
  },
  {
    path: "/projects/thirdperson-shooter",
    element: (
      <>
        <ScrollToTop />
        <ThirdpersonShooter />
      </>
    ),
  },
  {
    path: "/projects/third-person",
    element: (
      <>
        <ScrollToTop />
        <ThirdPerson />
      </>
    ),
  },
  {
    path: "/projects/retrohack",
    element: (
      <>
        <ScrollToTop />
        <RetroHack />
      </>
    ),
  },
  {
    path: "/projects/synergy",
    element: (
      <>
        <ScrollToTop />
        <Synergy />
      </>
    ),
  },
  {
    path: "/projects/kindled-spirits",
    element: (
      <>
        <ScrollToTop />
        <KindledSpirits />
      </>
    ),
  },
  {
    path: "/projects/crystal-runner",
    element: (
      <>
        <ScrollToTop />
        <CrystalRunner />
      </>
    ),
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
