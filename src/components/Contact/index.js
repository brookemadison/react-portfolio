import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("https://www.brookemadison.tech/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div className="contact">
      <h2 className="contact-section">
        Say <em>Hi!,</em> <em>I'd like to</em> hear from you!
      </h2>

      <form onSubmit={handleSubmit}>
        <Row className="justify-content-md-center">
          <Col xs lg="8">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input className="form-control" type="text" id="name" required />
            </div>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col xs lg="8">
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                className="form-control"
                type="email"
                id="email"
                required
              />
            </div>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs lg="8">
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea className="form-control" id="message" required />
            </div>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col xs lg="8">
            <div className="form-group">
              <button type="submit" className="btns contact-btn">
                {status}
              </button>
            </div>
          </Col>
        </Row>

        <div className="contact-simple">
          <h4 style={{ marginBottom: "13px" }}>
            Or just Keep it <em>Simple.</em>
          </h4>
          <p>
            <a className="link" href="mailto:brookemadisondesign@gmail.com">
              Email: Brookemadisondesign@gmail.com
            </a>
          </p>
          <p>
            <a className="link" href="tel:9042071528">
              Phone Number: 904-207-1528
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
