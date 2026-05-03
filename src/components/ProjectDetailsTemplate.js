import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGooglePlay } from "react-icons/fa";
import { SiItchdotio } from "react-icons/si";

export const ProjectDetailsTemplate = ({
  title,
  subtitle,
  description,
  roleItems = [],
  techStack = [],
  images = [],
  heroImage,
  videoUrl,
  playStoreUrl,
  itchUrl,
  heroDescription,
}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const handleKeyDown = (e) => {
      if (!selectedImage) return;

      if (e.key === "Escape") {
        setSelectedImage(null);
      }

      if (e.key === "ArrowLeft") {
        const prevIndex =
          selectedIndex === 0 ? images.length - 1 : selectedIndex - 1;

        setSelectedIndex(prevIndex);
        setSelectedImage(images[prevIndex]);
      }

      if (e.key === "ArrowRight") {
        const nextIndex =
          selectedIndex === images.length - 1 ? 0 : selectedIndex + 1;

        setSelectedIndex(nextIndex);
        setSelectedImage(images[nextIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, selectedIndex, images]);

  useEffect(() => {
    const sections = document.querySelectorAll(".fade-in-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.15 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const showPrevImage = (e) => {
    e.stopPropagation();

    const prevIndex =
      selectedIndex === 0 ? images.length - 1 : selectedIndex - 1;

    setSelectedIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
  };

  const showNextImage = (e) => {
    e.stopPropagation();

    const nextIndex =
      selectedIndex === images.length - 1 ? 0 : selectedIndex + 1;

    setSelectedIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  return (
    <div className="App project-detail-page">
      <section className="project-detail-hero fade-in-section">
        <Container>
          <Row>
            <Col md={6}>
              <h1>{title}</h1>
              <p>{subtitle}</p>

              <div className="project-cta">
                {playStoreUrl && (
                  <a href={playStoreUrl} target="_blank" rel="noreferrer">
                    <button className="cta-btn primary">
                      <FaGooglePlay />
                      Google Play
                    </button>
                  </a>
                )}

                {itchUrl && (
                  <a href={itchUrl} target="_blank" rel="noreferrer">
                    <button className="cta-btn secondary">
                      <SiItchdotio />
                      Itch.io
                    </button>
                  </a>
                )}
              </div>

              <p className="project-hero-description">{heroDescription}</p>
            </Col>

            <Col md={6}>
              {heroImage && (
                <img
                  src={heroImage}
                  alt={`${title} hero`}
                  className="project-hero-img"
                />
              )}
            </Col>
          </Row>
        </Container>
      </section>

      <section className="project-gallery fade-in-section">
        <Container>
          <Row>
            {images.map((img, index) => (
              <Col md={4} key={index}>
                <img
                  src={img}
                  alt={`${title} screenshot ${index + 1}`}
                  className="project-gallery-img"
                  onClick={() => {
                    setSelectedImage(img);
                    setSelectedIndex(index);
                  }}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Project Overview */}
      <section className="project-detail-content fade-in-section">
        <Container>
          <div className="section-card">
            <Row>
              <Col md={8}>
                <h2>Project Overview</h2>
                <p>{description}</p>
              </Col>

              <Col md={4}>
                <h2>Tech Stack</h2>
                <div className="tech-tags">
                  {techStack.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <h2>My Role</h2>
                <ul>
                  {roleItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {videoUrl && (
        <section className="project-video fade-in-section">
          <Container>
            <div className="section-videocard">
              <h2>See It In Action</h2>
              <div className="video-wrapper">
                <iframe
                  src={videoUrl}
                  title={`${title} Gameplay Video`}
                  allowFullScreen
                />
              </div>
            </div>
          </Container>
        </section>
      )}

      {selectedImage && (
        <div className="gallery-modal" onClick={() => setSelectedImage(null)}>
          <button className="gallery-modal-close">×</button>
          <button
            className="gallery-arrow gallery-arrow-left"
            onClick={showPrevImage}
          >
            ‹
          </button>

          <img
            src={selectedImage}
            alt="Selected project screenshot"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="gallery-info">
            <span>
              {selectedIndex + 1} / {images.length}
            </span>
            <span>Use ← → keys</span>
          </div>
          <button
            className="gallery-arrow gallery-arrow-right"
            onClick={showNextImage}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};
