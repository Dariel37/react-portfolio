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
            <h2>Get in Touch</h2>

            <form name="contact" method="post" data-netlify="true" action="/">
              <input type="hidden" name="form-name" value="contact" />
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    required
                    type="text"
                    placeholder="First Name"
                    name="name"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    required
                    type="text"
                    placeholder="last Name"
                    name="name"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    required
                    type="email"
                    placeholder="Email Address"
                    name="email"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="tel" placeholder="Phone No." name="tel" />
                </Col>
                <Col>
                  <textarea
                    required
                    row="6"
                    placeholder="Message"
                    name="message"
                  />
                  <button type="submit">
                    <span>send</span>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
