import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ResumeDownload from "../../assets/resume/resume.png";

const Resume = () => {
  return (
    <div id="Resume">
      <section className="resume-section">
        <Row className="justify-content-md-center">
          <Col xs lg="7">
            <h2>Resume</h2>
            <div className="btn">
              <a href={ResumeDownload} download id="resume-download">
                <img
                  src={require(`../../assets/resume/resume.png`).default}
                  alt="resume"
                  className="resume-img"
                />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs lg="7">
            <div className="btns resume-btn">
              <a href={ResumeDownload} download="Brooke Madison's resume.png">
                {" "}
                Download{" "}
              </a>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default Resume;
