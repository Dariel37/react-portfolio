import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import { FaLinkedinIn } from "react-icons/fa";
import { HiDocument } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/dariel-vidal-64113b200/">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/Dariel37">
                <FaGithub />
              </a>
              <a href="https://drive.google.com/file/d/1ppahpqKdmIet1si7BCa5wVPaw1ql13Lt/view">
                <HiDocument />
              </a>
            </div>
            <p>CopyRight 2022. All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
