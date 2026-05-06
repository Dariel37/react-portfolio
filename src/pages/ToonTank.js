import React from "react";
import { NavBar } from "../components/NavBar";
import { ProjectDetailsTemplate } from "../components/ProjectDetailsTemplate";
import ToonTan from "../assets/img/ToonTank/ToonTank.png";
import ToonTan1 from "../assets/img/ToonTank/ToonTank1.png";
import ToonTan2 from "../assets/img/ToonTank/ToonTank2.png";
import ToonTanMain from "../assets/img/ToonTank/ToonTankMain.png";

export const ToonTank = () => {
  return (
    <>
      <NavBar />

      <ProjectDetailsTemplate
        title="ToonTank"
        subtitle="Third-Person Tank Shooter • Unreal Engine 4"
        heroDescription="A third-person tank combat game built in Unreal Engine 4, where players destroy enemy turrets while avoiding incoming fire."
        stats={[
          { label: "Engine", value: "Unreal Engine 4" },
          { label: "Language", value: "C++ / Blueprint" },
          { label: "Platform", value: "PC" },
          { label: "Role", value: "Developer" },
          { label: "Type", value: "Course Project" },
        ]}
        description="ToonTanks is a third-person tank combat game developed in Unreal Engine 4 as part of a Udemy course. The player controls a tank and must eliminate all enemy turrets to complete the level.

        Enemy turrets actively track the player and will begin firing when the player moves within range, creating a constant need for positioning and timing. The gameplay focuses on simple but engaging combat mechanics, where players must aim, shoot, and avoid enemy attacks to survive.

        This project highlights core gameplay systems such as player movement, targeting, shooting mechanics, and basic enemy AI behavior, while providing experience working with Unreal Engine and C++/Blueprint workflows."
        techStack={[
          "Unreal Engine 4",
          "C++",
          "Blueprints",
          "AI Behavior",
          "Game Mechanics",
        ]}
        roleItems={[
          "Implemented player tank movement and shooting mechanics",
          "Developed enemy turret AI with targeting and attack behavior",
          "Built health and damage systems for player and enemies",
          "Handled win/lose conditions based on turret destruction",
          "Worked with Unreal Engine 4 using C++ and Blueprint systems",
        ]}
        images={[ToonTan, ToonTan1, ToonTan2]}
        heroImage={ToonTanMain}
        videoUrl="https://www.youtube.com/embed/SWoJ2t6nH8s"
      />
    </>
  );
};
