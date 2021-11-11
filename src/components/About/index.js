import React from "react";
// import Image from 'react-bootstrap/Image'
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
// import Container from 'react-bootstrap/Container'
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
  return (
    <section className='my-5'>
      <h2 id='About'>Who am I?</h2>
      <img
        src={coverImage}
        className='my-2'
        style={{ width: "100%" }}
        alt='cover'
      />
      <div >
        <p>
          Hi, I'm Brooke! a <em>Web Designer</em> and <em> Full stack Developer</em> based in <em>Jacksonville, Florida</em>
        </p>
      </div>
      <div className='btn' style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
        <a href='#About' className='btns'>
          More about me
        </a>
      </div>
    </section>
  );
}

export default About;
