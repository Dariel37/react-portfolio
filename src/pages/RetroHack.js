import React from "react";
import { NavBar } from "../components/NavBar";
import { ProjectDetailsTemplate } from "../components/ProjectDetailsTemplate";
import Retro from "../assets/img/Retro-hack/RetroHack.png";
import Retro2 from "../assets/img/Retro-hack/RetroHack2.png";
import Retro3 from "../assets/img/Retro-hack/RetroHack3.png";
import RetroMain from "../assets/img/Retro-hack/RetroHackMain.png";

export const RetroHack = () => {
  return (
    <>
      <NavBar />

      <ProjectDetailsTemplate
        title="RetroHack"
        subtitle="VR Password Cracking Simulation • Unity"
        heroDescription="A VR password-cracking challenge where players interact with a terminal using their hands to guess the correct password before running out of attempts."
        stats={[
          { label: "Engine", value: "Unity" },
          { label: "Language", value: "C#" },
          { label: "Platform", value: "VR" },
          { label: "Role", value: "Unity Developer" },
          { label: "Type", value: "XR Bootcamp Project" },
        ]}
        description="RetroHack is a VR password-cracking experience where players stand in front of a terminal and manually enter password guesses using hand interactions. The player has three attempts to find the correct password. Each incorrect guess triggers escalating consequences, causing one of the facilities in front of the player to explode. If all three attempts fail, the entire system collapses and the player loses."
        techStack={["Unity", "C#", "VR", "XR Interaction Toolkit"]}
        roleItems={[
          "Built the VR terminal interaction system using hand-based input",
          "Implemented password validation logic with a three-attempt system",
          "Designed consequence feedback with progressive facility destruction",
          "Structured gameplay around tension and player decision-making",
          "Worked with Unity XR Interaction Toolkit for VR input and interactions",
        ]}
        images={[Retro, Retro2, Retro3]}
        heroImage={RetroMain}
        videoUrl="https://www.youtube.com/embed/mh6l6aax8TU"
      />
    </>
  );
};
