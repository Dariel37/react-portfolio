import { Row, Col, Container } from "react-bootstrap";
import { Player } from "@lottiefiles/react-lottie-player";

export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <Player
              src="https://assets8.lottiefiles.com/private_files/lf30_nsqfzxxx.json"
              className="player"
              loop
              autoplay
            />
          </Col>
          <Col md={6}>
            {/* <h2>Get in Touch</h2> */}

            {/* <form name="contact" method="POST" data-netlify="true" action="/">
              <Row>
                <Col sm={6} className="px-1">
                  <input type="text" placeholder="First Name" name="name" />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="text" placeholder="First Name" name="name" />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="tel" placeholder="Phone No." name="tel" />
                </Col>
                <Col>
                  <textarea row="6" placeholder="Message" name="message" />
                  <button type="submit">
                    <span>send</span>
                  </button>
                </Col>
              </Row>
            </form> */}
            {/* <form name="contact" method="POST" data-netlify="true" action="/">
              <p>
                <label>
                  Name <input type="text" name="name" />
                </label>
              </p>
              <p>
                <label>
                  Email <input type="email" name="email" />
                </label>
              </p>
              <p>
                <button type="submit">Send</button>
              </p>
            </form> */}
            <h4>
              If you want to ask me any question or just chat click that button
              below 👇
            </h4>
            <br />
            <br />
            <a
              style={{ textDecoration: "none" }}
              href="mailto:vidaldariel93@gmail.com"
            >
              <div className="contactbtn">Get in Touch</div>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
