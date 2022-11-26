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

import { Player } from "@lottiefiles/react-lottie-player";

import { FaUnity } from "react-icons/fa";
import { SiHellofresh, SiUnrealengine } from "react-icons/si";
import { GiWorld } from "react-icons/gi";

import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Energy Depot Webpage",
      description: "Web Design & Development",
      imgUrl: projImg4,
      link: "https://energydepotpr.com/?gclid=Cj0KCQiAj4ecBhD3ARIsAM4Q_jFavi72AVv7N2ZZUUd7ltsqILsDMiHcg_z874Q8mRtKTVNNzxvKXpUaAoaiEALw_wcB",
    },
    {
      title: "Financial Calculator",
      description: "Internship at Outcome Project",
      imgUrl: projImg3,
      link: "https://ian-matias-dariel-vidal-projects.shinyapps.io/deploy/",
    },
    {
      title: "CARLA Project dedicated Webpage",
      description: "Internship at Arecibo Observatory",
      imgUrl: projImg2,

      link: "http://www.naic.edu/ao/scientist-user-portal/atmospheric/rof/carla-project",
    },
    {
      title: "Personal Portfolio",
      description: "Web Development",
      imgUrl: projImg1,
      link: "https://dariel37.github.io/CSS-WebPage/",
    },
  ];

  const Unity = [
    {
      title: "Thirdperson",
      description: "Udemy Unity Course  ",
      imgUrl: projImg9,
      link: "/Third-Person",
    },
    {
      title: "VR Multiplayer",
      description: "Udemy Unity VR Course  ",
      imgUrl: projImg8,
    },
    {
      title: "Synergy",
      description: "VR Developer bootcamp at XR TERRA",
      imgUrl: projImg7,
    },
    {
      title: "KindledSpirits",
      description: "VR Developer bootcamp at XR TERRA",
      imgUrl: projImg6,
    },
    {
      title: "RetroHack",
      description: "VR Developer bootcamp at XR TERRA",
      imgUrl: projImg5,
    },
    {
      animation: true,
      animationUrl:
        "https://assets5.lottiefiles.com/private_files/lf30_jqzd2t9v.json",
    },
  ];

  const UnrealEngine = [
    {
      title: "3rd Person Shooter",
      description: "Udemy Unreal Engine Course",
      imgUrl: projImg11,
    },
    {
      title: "ToonTank",
      description: "Udemy Unreal Engine Course",
      imgUrl: projImg10,
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
                    <GiWorld /> <span>Webpage</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">
                    <FaUnity /> <span>Unity</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">
                    <SiUnrealengine /> <span>Unreal</span>
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
