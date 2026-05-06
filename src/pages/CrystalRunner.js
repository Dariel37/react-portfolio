import React from "react";
import { NavBar } from "../components/NavBar";
import { ProjectDetailsTemplate } from "../components/ProjectDetailsTemplate";
import hero from "../assets/img/Crystal-runner/crystal-runner-hero.png";
import forest from "../assets/img/Crystal-runner/crystal-runner-forest-level.png";
import enemy from "../assets/img/Crystal-runner/crystal-runner-enemy-attack.png";
// import platforming from "../assets/img/Crystal-runner/crystal-runner-platforming.png";
import ice from "../assets/img/Crystal-runner/crystal-runner-ice.png";

export const CrystalRunner = () => {
  return (
    <>
      <NavBar />

      <ProjectDetailsTemplate
        title="Crystal Runner"
        subtitle="2D Action Platformer • Mobile & PC"
        playStoreUrl="https://play.google.com/store/apps/details?id=com.hollowstudio.questplatform"
        itchUrl="https://hollowdevlab.itch.io/crystal-runner"
        heroDescription="A fast-paced 2D action platformer focused on precision movement, combat, and exploration. Players navigate handcrafted levels filled with enemies, traps, and hidden crystals, mastering mechanics like wall jumps and double jumps to survive increasingly challenging stages."
        stats={[
          { label: "Engine", value: "Unity" },
          { label: "Language", value: "C#" },
          { label: "Platform", value: "Mobile & PC" },
          { label: "Role", value: "Solo Developer" },
          { label: "Status", value: "Published" },
        ]}
        description="Crystal Runner is a fast-paced 2D platformer where players collect crystals, avoid traps, and fight enemies across handcrafted levels. Designed with responsive controls for both mobile and PC, the game focuses on smooth movement, tight gameplay, and progressive difficulty."
        techStack={[
          "Unity",
          "C#",
          "2D Platformer",
          "Mobile UI",
          "Game Physics",
          "Google Play",
        ]}
        roleItems={[
          "Designed and developed full gameplay system from scratch",
          "Implemented player mechanics (jump, wall jump, double jump)",
          "Created enemy behaviors and combat interactions",
          "Built responsive UI for mobile and desktop",
          "Designed multiple levels with increasing difficulty",
          "Optimized performance and gameplay feel",
          "Published game on Google Play Store",
        ]}
        heroImage={hero}
        images={[forest, enemy, ice]}
        videoUrl="https://www.youtube.com/embed/hD54wI8r3qU"
      />
    </>
  );
};
