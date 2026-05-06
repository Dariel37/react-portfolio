import React from "react";
import { NavBar } from "../components/NavBar";
import { ProjectDetailsTemplate } from "../components/ProjectDetailsTemplate";
import TPS from "../assets/img/ThirdPersonShooter/ThirdPersonShooter.png";
import TPS1 from "../assets/img/ThirdPersonShooter/ThirdPersonShooter1.png";
import TPS2 from "../assets/img/ThirdPersonShooter/ThirdPersonShooter2.png";
import TPSMain from "../assets/img/ThirdPersonShooter/ThirdPersonShooterMain.png";

export const ThirdpersonShooter = () => {
  return (
    <>
      <NavBar />

      <ProjectDetailsTemplate
        title="ThirdPerson Shooter"
        subtitle="Third-Person Shooter • Unreal Engine 4"
        heroDescription="A third-person shooter built in Unreal Engine where players navigate a facility and eliminate enemy soldiers using movement, aiming, and combat mechanics."
        stats={[
          { label: "Engine", value: "Unreal Engine 4" },
          { label: "Language", value: "C++ / Blueprint" },
          { label: "Platform", value: "PC" },
          { label: "Role", value: "Developer" },
          { label: "Type", value: "Course Project" },
        ]}
        description="Third Person Shooter is a combat-focused project developed in Unreal Engine as part of a Udemy course. The player controls a third-person character who navigates a facility while engaging enemy soldiers in combat.

        The gameplay centers around movement, shooting mechanics, and enemy encounters, requiring the player to eliminate all enemies in the level to win. Enemy soldiers actively respond to the player, creating a dynamic combat experience.

        This project also focused on implementing character animations, including running and death animations, to enhance realism and feedback during gameplay. It highlights core systems such as player control, shooting mechanics, enemy behavior, and animation integration within Unreal Engine."
        techStack={[
          "Unreal Engine 4",
          "C++",
          "Blueprints",
          "Animation Systems",
          "Combat Mechanics",
        ]}
        roleItems={[
          "Implemented third-person character movement and shooting mechanics",
          "Developed enemy soldier behavior for combat encounters",
          "Integrated character animations including running and death states",
          "Built combat flow where players eliminate all enemies to complete the level",
          "Worked with Unreal Engine systems using C++ and Blueprints",
        ]}
        images={[TPS, TPS1, TPS2]}
        heroImage={TPSMain}
        // videoUrl="https://www.youtube.com/embed/XppItxSJUL8"
      />
    </>
  );
};
