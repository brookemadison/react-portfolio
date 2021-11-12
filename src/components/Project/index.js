import React from 'react';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import ProjectThree from "../../assets/projects/0.png";
import ProjectTwo from "../../assets/projects/1.png";
import ProjectOne from "../../assets/projects/2.png";
import BudgetTracker from "../../assets/projects/3.png";


<section>
<div id="Project"> 
<h3>A <em>small gallery</em> of recent projects <em>chosen by me.</em> Interested to <em>see some more? </em> Visit my <a className='project-link' style={{ textDecoration: 'none'}} href='https://github.com/brookemadison'>Github</a> page.</h3>
<div className='btn'>
        <a href='https://github.com/brookemadison' className='btns see-more-btn'>
          See More
        </a>
      </div>
</div>
<p>
  This is where magic comes to life and visual stories are made. I believe that design must solve a need, stir a desire for involvement, and shed light on a path that is enjoyable, trustworthy, and human.
  </p>
</section>


const Project = (props) => {
  return (
<Row xs={1} md={2} className="g-4">
  {Array.from({ length: 1 }).map((_, idx) => (
    
    <Col >
      <Card>
        <Card.Img variant="top" src={ProjectThree} />
        <Card.Body>
          <Card.Title>Project Three</Card.Title>
          <Card.Text>
            Details coming soon
          </Card.Text>
          <Button className="projects-btns" variant="outline-dark">See Deployed</Button>
          <Button className="projects-btns"  variant="outline-dark">View on Github</Button>
        </Card.Body>
      </Card>
    </Col>
    
  ))}
  <Col>
      <Card>
        <Card.Img variant="top" src={ProjectTwo} />
        <Card.Body>
          <Card.Title>Project Two</Card.Title>
          <Card.Text>
            Details coming soon
          </Card.Text>
          <Button className="projects-btns"  variant="outline-dark">See Deployed</Button>
          <Button className="projects-btns"  variant="outline-dark">View on Github</Button>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src={ProjectOne} />
        <Card.Body>
          <Card.Title>Project One</Card.Title>
          <Card.Text>
            Details coming soon
          </Card.Text>
          <Button className="projects-btns"  variant="outline-dark">See Deployed</Button>
          <Button className="projects-btns"  variant="outline-dark">View on Github</Button>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src={BudgetTracker} />
        <Card.Body>
          <Card.Title>BudgetTracker</Card.Title>
          <Card.Text>
            Details coming soon
          </Card.Text>
          <Button className="projects-btns"  variant="outline-dark">See Deployed</Button>
          <Button className="projects-btns"  variant="outline-dark">View on Github</Button>
        </Card.Body>
      </Card>
    </Col>
</Row>
   );
  };


export default Project;


// const Project = ()=>{
//   return(

//       <div id="Project">
//        <h1>Projects</h1>
//         </div>