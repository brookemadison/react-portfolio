import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }

  render() {
    return (
      <div className="contact">
        <h2 className="contact-section">
          Say <em>Hi!,</em> <em>I'd like to</em> hear from you!
        </h2>

        <form
          id="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <Row className="justify-content-md-center">
            <Col xs lg="8">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={this.state.name}
                  onChange={this.onNameChange.bind(this)}
                />
              </div>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col xs lg="8">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  value={this.state.email}
                  onChange={this.onEmailChange.bind(this)}
                />
              </div>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col xs lg="8">
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  rows="5"
                  id="message"
                  value={this.state.message}
                  onChange={this.onMessageChange.bind(this)}
                />
              </div>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col xs lg="8">
              <div className="form-group">
                <button type="submit" className="btns contact-btn">
                  Submit
                </button>
              </div>
            </Col>
          </Row>
        </form>

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
      </div>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }
}

export default ContactForm;
