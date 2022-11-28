import React from "react";
import "../App.css";
import { NavBar } from "../components/NavBar";
import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import test from "../assets/img/test.png";
import "animate.css";

export const ThirdPerson = () => {
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
    <div className="App">
      <NavBar />

      <section className="banner-Third-person" id="Third-Person">
        <div>
          <h1>Projects Unity Engine</h1>
          <p className="section__subtittle_intro">Game Design & Development</p>
        </div>
      </section>

      <section className="project-items">
        <Container>
          <Row>
            <Col>
              <div className="project-bx">
                <h2>ThirdPerson</h2>

                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="project-slider"
                >
                  <div className="item">
                    <img className="" alt="thirdPerson-img" src={test} />
                  </div>
                  <div className="item">
                    <img className="" alt="thirdPerson-img" src={test} />
                  </div>
                  <div className="item">
                    <img className="" alt="thirdPerson-img" src={test} />
                  </div>
                  <div className="item">
                    <img className="" alt="thirdPerson-img" src={test} />
                  </div>
                  <div className="item">
                    <img className="" alt="thirdPerson-img" src={test} />
                  </div>
                  <div className="item">
                    <img className="" alt="thirdPerson-img" src={test} />
                  </div>
                  <div className="item">
                    <img className="" alt="thirdPerson-img" src={test} />
                  </div>
                  <div className="item">
                    <img className="" alt="thirdPerson-img" src={test} />
                  </div>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="banner-Third-persont"></section>
    </div>
  );
};
