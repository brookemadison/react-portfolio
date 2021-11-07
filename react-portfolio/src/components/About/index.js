import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
  return (
    <section className='my-5'>
      <h1 id='about'>Who am I?</h1>
      <img
        src={coverImage}
        className='my-2'
        style={{ width: "100%" }}
        alt='cover'
      />
      <div className='my-2'>
        <p>
          Hi, I'm Brooke! a <em>Web Designer</em> and
          <em>Full stack Developer</em> based in <em>Jacksonville, Florida</em>
        </p>
      </div>
      <div className='btn'>
        <a href='#about' className='btns'>
          More about me
        </a>
      </div>
    </section>
  );
}

export default About;
