import React from 'react';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


const Project = (props) => {
  return (
<Row xs={1} md={2} className="g-4">

<section>
<div id="Project"> 
<h3>A <em>small gallery</em> of recent projects <em>chosen by me.</em> Interested to <em>see some more? </em> Visit my <a className='project-link' style={{ textDecoration: 'none'}} href='https://github.com/brookemadison'>Github</a> page.</h3>
<div className='btn' style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
        <a href='https://github.com/brookemadison' className='btns'>
          See More
        </a>
      </div>
</div>

<p>
  This is where magic comes to life and visual stories are made. I believe that design must solve a need, stir a desire for involvement, and shed light on a path that is enjoyable, trustworthy, and human.
  </p>
  
</section>

  {Array.from({ length: 4 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
   );
  };


export default Project;


// const Project = ()=>{
//   return(

//       <div id="Project">
//        <h1>Projects</h1>
//         </div>