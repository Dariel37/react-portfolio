import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

import "animate.css";
import TrackVisibility from "react-on-screen";
import { Player } from "@lottiefiles/react-lottie-player";
import Typewriter from "typewriter-effect";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={` ${
                    isVisible && "animate__animated animate__fadeIn"
                  }`}
                >
                  {/* <span className="tagline">Welcome to my Portfolio</span> */}
                  <h1 className="title">{"Hi I'm Dariel Vidal "}</h1>
                  <h1>
                    <Typewriter
                      options={{
                        strings: [
                          "Web Developer",
                          "Game Developer",
                          "VR Developer",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </h1>
                  <p>
                    I graduated in Computer Science with a minor in Videogame
                    Design and Development at Inter American University, Bayamon
                    Campus.
                  </p>

                  <button onClick={() => console.log("connect")}>
                    Let's connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <Player
              src="https://assets8.lottiefiles.com/packages/lf20_md2b3ywy.json"
              className="player"
              loop
              autoplay
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
