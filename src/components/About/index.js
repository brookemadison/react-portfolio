import React from "react";
// import Image from 'react-bootstrap/Image'
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
// import Container from 'react-bootstrap/Container'
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
  return (
    <div>
    <section className='my-5'>
          <h2 className='about-me-header'>
          Hi, I'm Brooke! a <em>Web Designer</em> and <em> Full stack Developer</em> based in <em>Jacksonville, Florida</em>
        </h2>
      <img
        src={coverImage}
        className='my-2'
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
        alt='cover'
      />
  <p>
  This is where magic comes to life and visual stories are made. I believe that design must solve a need, stir a desire for involvement, and shed light on a path that is enjoyable, trustworthy, and human.
  </p>
  <p>
  Full stack developer leveraging sales background to build a more intuitive user experience on the web. Recently earned a certificate in full stack development from University of Central Florida, with newly developed skills in Javascript, CSS, and responsive web design. Known as an innovative problem solver with a determination for learning new things. Passionate about approaching programming challenges from different angles and collaborating with others to create meaningful web applications.
  </p>

  <div className='btn' style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
        <a href= 'src/assets/resume/resume.png' className='btns'>
          Download Resume
        </a>
      </div>

  <h2>Skills</h2>
  <p>UI/UX Design / Git / React / JavaScript ES6 + / CSS3 / HTML5 / SQL / NoSQL / Express / Node / Handlebars / jQuery / REST API / Bootstrap + React-Bootstrap / Bulma </p>

         <div className='btn' style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
        <a href='#Contact' className='btns'>
          Contact Me
        </a>
      </div>

  </section>
  </div>
  );
}

export default About;
