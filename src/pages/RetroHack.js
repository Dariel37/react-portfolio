import React from "react";
import { NavBar } from "../components/NavBar";
import { ProjectDetailsTemplate } from "../components/ProjectDetailsTemplate";
import test from "../assets/img/test.png";

export const RetroHack = () => {
  return (
    <>
      <NavBar />

      <ProjectDetailsTemplate
        title="RetroHack"
        subtitle="VR Developer Bootcamp Project at XR TERRA"
        description="RetroHack is a Unity VR project focused on immersive interaction, environment design, and player experience."
        techStack={["Unity", "C#", "VR", "XR Interaction"]}
        roleItems={[
          "Built VR interaction systems",
          "Worked on environment setup",
          "Implemented gameplay flow",
          "Polished user experience",
        ]}
        images={[test, test, test]}
        heroImage={test}
        videoUrl="https://www.youtube.com/embed/SWoJ2t6nH8s"
      />
    </>
  );
};
