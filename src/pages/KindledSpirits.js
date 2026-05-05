import React from "react";
import { NavBar } from "../components/NavBar";
import { ProjectDetailsTemplate } from "../components/ProjectDetailsTemplate";
import Kinled1 from "../assets/img/Kindled-spirit/KindledSpirit.png";
import Kinled2 from "../assets/img/Kindled-spirit/KindledSpirit2.png";
import Kinled3 from "../assets/img/Kindled-spirit/KindledSpirit3.png";
import KinledMain from "../assets/img/Kindled-spirit/KindledSpirit1.png";

export const KindledSpirits = () => {
  return (
    <>
      <NavBar />

      <ProjectDetailsTemplate
        title="Kindled Spirits"
        subtitle="VR Interactive Experience • Unity"
        heroDescription="A multiplayer VR survival experience where players explore a frozen environment to find the cabin key while managing warmth, fighting enemies, and using immersive hand-based interactions."
        stats={[
          { label: "Engine", value: "Unity" },
          { label: "Language", value: "C#" },
          { label: "Platform", value: "VR" },
          { label: "Role", value: "Unity Developer" },
          { label: "Type", value: "XR Bootcamp Project" },
        ]}
        description={`Kindled Spirits is a multiplayer VR survival experience where players must explore a frozen environment to locate the cabin key and escape. As players move through the world, they gradually freeze, creating constant pressure to manage warmth and resources.

        To survive, players rely on a torch to light campfires and maintain body heat. The game also features enemy encounters, where players can defend themselves by throwing marshmallows—either raw or burned—to deal varying levels of damage.

        Players manage their inventory through a VR backpack system, allowing them to store key items such as the cabin key, marshmallows, and kindling. The project emphasizes immersive interaction, combining hand-based controls, environmental mechanics, and cooperative multiplayer gameplay.

        Developed as part of the XR Terra Bootcamp, this project was created in a team of one designer and two developers, focusing on collaboration, gameplay systems, and immersive VR mechanics.`}
        techStack={[
          "Unity",
          "C#",
          "VR",
          "Multiplayer",
          "XR Interaction Toolkit",
          "Inventory System",
        ]}
        roleItems={[
          "Developed core VR gameplay systems including movement, interaction, and environmental mechanics",
          "Implemented temperature survival system where players gradually freeze and must manage heat sources",
          "Built interactive campfire and torch mechanics to restore player warmth",
          "Created enemy combat system using throwable items with variable damage (raw vs burned marshmallows)",
          "Designed and implemented VR backpack inventory system for storing key items",
          "Integrated multiplayer functionality for shared gameplay experience",
          "Collaborated in a team of one designer and two developers during XR Terra Bootcamp",
        ]}
        images={[Kinled1, Kinled2, Kinled3]} // add later
        heroImage={KinledMain} // add later
        videoUrl="https://www.youtube.com/embed/d3E3f8ukysg"
      />
    </>
  );
};
