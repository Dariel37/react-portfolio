import { Col, Container, Tab, Nav, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/Webpage.png";
import projImg2 from "../assets/img/AO.png";
import projImg3 from "../assets/img/Financial.png";
import projImg4 from "../assets/img/EnergyDepot.png";
import projImg5 from "../assets/img/RetroHack3.png";
import projImg6 from "../assets/img/KindledSpirits6.png";
import projImg7 from "../assets/img/Synergy.png";
import projImg8 from "../assets/img/VRMultiplayer.png";
import projImg9 from "../assets/img/Thirdperson.png";
import projImg10 from "../assets/img/ToonTank.png";
import projImg11 from "../assets/img/Shooter.png";
import { FaUnity } from "react-icons/fa";
import { SiUnrealengine } from "react-icons/si";
import { GiWorld } from "react-icons/gi";

import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio",
      description: "Web Development",
      imgUrl: projImg1,
    },
    {
      title: "CARLA Project dedicated Webpage",
      description: "Internship at Arecibo Observatory",
      imgUrl: projImg2,
    },
    {
      title: "Financial Calculator",
      description: "Internship at Outcome Project",
      imgUrl: projImg3,
    },
    {
      title: "Energy Depot Webpage",
      description: "Web Design & Development",
      imgUrl: projImg4,
    },
  ];

  const Unity = [
    {
      title: "RetroHack",
      description: "VR Developer bootcamp at XR TERRA",
      imgUrl: projImg5,
    },
    {
      title: "KindledSpirits",
      description: "VR Developer bootcamp at XR TERRA",
      imgUrl: projImg6,
    },
    {
      title: "Synergy",
      description: "VR Developer bootcamp at XR TERRA",
      imgUrl: projImg7,
    },
    {
      title: "VR Multiplayer",
      description: "Udemy Unity VR Course  ",
      imgUrl: projImg8,
    },
    {
      title: "Thirdperson",
      description: "Udemy Unity Course  ",
      imgUrl: projImg9,
    },
  ];

  const UnrealEngine = [
    {
      title: "ToonTank",
      description: "Udemy Unreal Engine Course",
      imgUrl: projImg10,
    },
    {
      title: "3rd Person Shooter",
      description: "Udemy Unreal Engine Course",
      imgUrl: projImg11,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__slideInUp" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    These are the projects that I have worked in my internships
                    and XR Terra botcamp, also personal projects
                  </p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">
                    {" "}
                    <GiWorld /> Webpage
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">
                    <FaUnity /> Unity
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">
                    <SiUnrealengine /> Unreal Engine
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {Unity.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="third">
                  <Row>
                    {UnrealEngine.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};
