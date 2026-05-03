import React from "react";
import { NavBar } from "../components/NavBar";
import { ProjectDetailsTemplate } from "../components/ProjectDetailsTemplate";
import test from "../assets/img/test.png";

export const ThirdPerson = () => {
  return (
    <>
      <NavBar />

      <ProjectDetailsTemplate
        title="Third Person Project"
        subtitle="Unity Game Development"
        description="This is a third-person Unity project where I worked on gameplay mechanics, movement, and environment interactions."
        techStack={["Unity", "C#", "Game Design", "Animation"]}
        roleItems={[
          "Developed player movement system",
          "Implemented combat mechanics",
          "Designed level interactions",
        ]}
        images={[test, test, test]}
        heroImage={test}
        videoUrl="https://www.youtube.com/embed/SWoJ2t6nH8s"
      />
    </>
  );
};
