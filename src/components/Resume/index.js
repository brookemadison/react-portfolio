import React from 'react';
import Button from 'react-bootstrap/Button'
import ResumeDownload from "../../assets/resume/resume.png";

const Resume = ()=>{
    
  return(

<div id="Resume">
  <section className='resume-section'>
    <h2>Resume</h2>
    <div className='btn'>
    <a href={ResumeDownload} download id="resume-download">
                        <img
                            src={require(`../../assets/resume/resume.png`).default}
                            alt='resume'
                            className="resume-img"
                        />
                        Download
                    </a>
      </div>

  </section>
</div>

  )
}

export default Resume;



