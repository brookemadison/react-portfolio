import React from "react";
// import Image from 'react-bootstrap/Image'
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
// import Container from 'react-bootstrap/Container'
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
  return (
    <div className='about-section'>
    <section className='my-5'>
          <h2 
        className='about-me-header'>
          Hi, I'm <em>Brooke!</em>
        </h2>
      <img 
        src={coverImage}
        className='about-img'
        alt='cover'
      />
  <p>
  I'm a Web Designer and full stack Developer based in Jacksonville, Florida. Leveraging my sales background to build a more intuitive user experience on the web. Recently I earned a certificate in full stack development from University of Central Florida, with newly developed skills in Javascript, CSS, and responsive web design. Known as an innovative problem solver with a determination for learning new things. I'm passionate about approaching programming challenges from different angles and collaborating with others to create meaningful web applications.
  </p>

  <div className='btns btn'
       >
        <a href= 'src/assets/resume/resume.png'>
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
