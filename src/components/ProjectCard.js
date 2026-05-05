import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import { Player } from "@lottiefiles/react-lottie-player";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  animation,
  link,
  featured,
}) => {
  const isExternal = link?.startsWith("http");

  return (
    <Col sm={6} md={4}>
      {animation ? (
        <div>
          <Player
            src="https://lottie.host/668f9e28-86aa-4fb5-82bd-c1f80eaadec7/NuLzk7pZ8k.json"
            className="player"
            loop
            autoplay
          />
        </div>
      ) : link ? (
        isExternal ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="proj-link"
          >
            <div className={`proj-imgbx ${featured ? "featured" : ""}`}>
              {featured && (
                <div className="featured-badge">Live on Google Play</div>
              )}
              <img src={imgUrl} alt={title} />
              <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
                {link && (
                  <>
                    <br />
                    <button className="project-btn">Preview</button>
                  </>
                )}
              </div>
            </div>
          </a>
        ) : (
          <Link to={link} className="proj-link">
            <div className={`proj-imgbx ${featured ? "featured" : ""}`}>
              {featured && (
                <div className="featured-badge">Live on Google Play</div>
              )}
              <img src={imgUrl} alt={title} />
              <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
                {link && (
                  <>
                    <br />
                    <button className="project-btn">Preview</button>
                  </>
                )}
              </div>
            </div>
          </Link>
        )
      ) : (
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      )}
    </Col>
  );
};
