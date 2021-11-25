import React from 'react';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import ProjectThree from "../../assets/projects/0.png";
import ProjectTwo from "../../assets/projects/1.png";
import ProjectOne from "../../assets/projects/2.png";
import BudgetTracker from "../../assets/projects/3.png";


const Project = (props) => {
  return (
<Row xs={1} md={2} className="g-4 project-section">

<section>
<div id="Project"> 
<h3>A <em>small gallery</em> of recent projects <em>chosen by me.</em> Interested to <em>see some more? </em> Visit my <a className='project-link' style={{ textDecoration: 'none'}} href='https://github.com/brookemadison'>Github</a> page.</h3>
        <a href='https://github.com/brookemadison' className='btns see-more-btn'>
          See More
        </a>
      </div>
<p>
  This is where magic comes to life and visual stories are made. I believe that design must solve a need, stir a desire for involvement, and shed light on a path that is enjoyable, trustworthy, and human.
  </p>
</section>

  {Array.from({ length: 1 }).map((_, idx) => (
    // First Project
    <Col >
      <Card>
        <Card.Img variant="top" src={ProjectThree} />
        <Card.Body>
          <Card.Title><h4>High Tech Love Match</h4></Card.Title>
          <Card.Text>
          High Tech Love Match is a dating app specifically created with the software engineer in mind. It is built to match like-minded people who are seeking a relationship.
          </Card.Text>
          
          <a href="https://high-tech-match.herokuapp.com/">
          <Button className="projects-btns" variant="outline-dark"> 
          See Deployed
          </Button>
          </a>
          <a href="https://github.com/Lightfooted/High-Tech-Match-Love">
          <Button className="projects-btns"  variant="outline-dark">View on Github</Button>
          </a>
        </Card.Body>
      </Card>
    </Col>
    
  ))}
  <Col>
  {/* second project */}
      <Card>
        <Card.Img variant="top" src={ProjectTwo} />
        <Card.Body>
          <Card.Title><h4>Project Two - Pokédex</h4></Card.Title>
          <Card.Text>
          <p>An online Pokédex that allows users to view and search for their favorite original 151 Pokémon.</p>
          <p>Technologies Used:</p>
          <p>HTML / CSS / Javascript / Node.js / Express / MySQL / dotenv / Heroku / jawsDB /Sequelize / Bcrypt / express-session / Handlebars / Animate.css / PokéAPI</p>
          </Card.Text>
          <a href="https://protected-hamlet-00069.herokuapp.com/
">
          <Button className="projects-btns"  variant="outline-dark">See Deployed</Button>
          </a>
          <a href="https://github.com/Lightfooted/pokedex-project">
          <Button className="projects-btns"  variant="outline-dark">View on Github</Button>
          </a>
        </Card.Body>
      </Card>
    </Col>
    <Col>
    {/* Third Project */}
      <Card>
        <Card.Img variant="top" src={ProjectOne} />
        <Card.Body>
          <Card.Title><h4>Project One - Decide Eat</h4></Card.Title>
          <Card.Text>
            <p>A date night app crafted to offer a unique experience to users by taking a quiz that pairs you with a recipe, cocktail, and music playlist recommendation</p>
            <p>Technologies Used:</p>
            <p>HTML / CSS / Javascript / jQuery / Bulma / Spoonacular API / Spotify API</p>
          </Card.Text>
          <a href="https://padredilg.github.io/decide-eat/">
          <Button className="projects-btns"  variant="outline-dark">See Deployed</Button>
          </a>
          <a href="https://github.com/Padredilg/decide-eat">
          <Button className="projects-btns"  variant="outline-dark">View on Github</Button>
          </a>
        </Card.Body>
      </Card>
    </Col>
    <Col>
    {/* Fourth Project */}
      <Card>
        <Card.Img variant="top" src={BudgetTracker} />
        <Card.Body>
          <Card.Title><h4>BudgetTracker</h4></Card.Title>
          <Card.Text>
            <p>A PWA budget tracker application allows for offline access and functionality to to add expenses and deposits to their budget with or without a connection.</p>
            <p>Technologies Used:</p>
            <p>Javascript / indexedDB / Express / MongoDB / Mongoose / Heroku</p>
          </Card.Text>
          <a href="https://lit-reaches-08410.herokuapp.com/">
          <Button className="projects-btns"  variant="outline-dark">See Deployed</Button>
          </a>
          <a href="https://github.com/brookemadison/budget-tracker">
          <Button className="projects-btns"  variant="outline-dark">View on Github</Button>
          </a>
        </Card.Body>
      </Card>
    </Col>
</Row>
   );
  };


export default Project;