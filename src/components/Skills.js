import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                I have experience in different programming languages like
                <br></br> C#, C++. web app, using Shiny app, R programming
                language. <br></br> For Webpage development, I worked with HTML,
                CSS, BOOTSTRAP, React, EJS <br></br>
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <h5>VR Development</h5>
                </div>
                <div className="item">
                  <h5>Game Development</h5>
                </div>
                <div className="item">
                  <h5>C#</h5>
                </div>
                <div className="item">
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <h5>React</h5>
                </div>
                <div className="item">
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <h5>EJS</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
