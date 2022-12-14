import { Col } from "react-bootstrap";
import { Player } from "@lottiefiles/react-lottie-player";
export const ProjectCard = ({
  title,
  description,
  imgUrl,
  animation,
  link,
  // animationUrl,
}) => {
  return (
    <Col sm={6} md={4}>
      {animation ? (
        <div>
          {" "}
          <Player
            src="https://lottie.host/668f9e28-86aa-4fb5-82bd-c1f80eaadec7/NuLzk7pZ8k.json"
            className="player"
            loop
            autoplay
          />
        </div>
      ) : (
        <div className="proj-imgbx">
          <img src={imgUrl} alt="project-img" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            <br />
            <button>
              {" "}
              <a style={{ textDecoration: "none" }} href={`${link}`}>
                {" "}
                Preview
              </a>
            </button>
          </div>
        </div>
      )}
    </Col>
  );
};
