import React from "react";
import "../App.css";
import { NavBar } from "../components/NavBar";
import { Banner } from "../components/Banner";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Footer } from "../components/Footer";
import { Contact } from "../components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";

export const Home = () => {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};