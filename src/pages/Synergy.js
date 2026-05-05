import React from "react";
import { NavBar } from "../components/NavBar";
import { ProjectDetailsTemplate } from "../components/ProjectDetailsTemplate";
import Syner from "../assets/img/Synergy/Synergy.png";
import Syner1 from "../assets/img/Synergy/Synergy1.png";
import Syner2 from "../assets/img/Synergy/Synergy2.png";
import Syner3 from "../assets/img/Synergy/Synergy3.png";
import SynerMain from "../assets/img/Synergy/Synergy4.png";

export const Synergy = () => {
  return (
    <>
      <NavBar />

      <ProjectDetailsTemplate
        title="Synergy"
        subtitle="VR Multiplayer Experience • Unity"
        heroDescription="A VR action experience where players consume elemental cubes to gain unique abilities and defeat enemies using immersive combat and hand-based interactions."
        stats={[
          { label: "Engine", value: "Unity" },
          { label: "Language", value: "C#" },
          { label: "Platform", value: "VR" },
          { label: "Role", value: "Unity Developer" },
          { label: "Type", value: "XR Bootcamp Project" },
        ]}
        description="Synergy is a VR action experience developed during the XR Terra Bootcamp as a personal project alongside the team-based project KindledSpirits. The game focuses on fast-paced combat and player empowerment through dynamic ability systems.

        Players consume elemental cubes to gain different abilities, including fire, ice, green fire, and purple energy, each offering unique ways to attack and eliminate enemies. The experience encourages experimentation with abilities to overcome increasingly challenging encounters.

        In addition to elemental powers, players can equip weapons such as swords and axes, combining physical combat with ability-based mechanics. The project emphasizes immersive interaction through hand-based VR controls, allowing players to engage directly with the environment and enemies.

        This project highlights gameplay system design, VR interaction, and the integration of combat mechanics within an immersive virtual experience."
        techStack={[
          "Unity",
          "C#",
          "VR",
          "XR Interaction Toolkit",
          "Combat Systems",
          "Ability System",
        ]}
        roleItems={[
          "Designed and developed elemental ability system using collectible cubes",
          "Implemented multiple player abilities including fire, ice, green fire, and purple energy attacks",
          "Built enemy combat interactions around ability-based and weapon-based gameplay",
          "Added VR weapon interactions for swords and axes using hand-based controls",
          "Created gameplay flow focused on defeating all remaining enemies",
          "Developed the project independently alongside the XR Terra group project",
        ]}
        images={[Syner, Syner2, Syner3]}
        heroImage={SynerMain}
        videoUrl="https://www.youtube.com/embed/LFuAdHmYI-E"
      />
    </>
  );
};
