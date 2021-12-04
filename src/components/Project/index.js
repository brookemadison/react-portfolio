import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ProjectThree from "../../assets/projects/0.png";
import ProjectTwo from "../../assets/projects/1.png";
import ProjectOne from "../../assets/projects/2.png";
import BudgetTracker from "../../assets/projects/3.png";
import PasswordGenerator from "../../assets/projects/4.png";
import SocialNetworkAPI from "../../assets/projects/5.png";

const Project = () => {
  return (
<Container className='portfolio-container'>

<Row className="justify-content-md-center">
<Col xs lg="7">
<section>
<div id="Project"> 
<h3>A <em>small gallery</em> of recent projects <em>chosen by me.</em> Interested to <em>see some more? </em> Visit my <a className='project-link' style={{ textDecoration: 'none'}} href='https://github.com/brookemadison'>Github</a> page.</h3>
<div className='btns see-more-btn'>
<a href='https://github.com/brookemadison'> See More
</a>
</div>   
</div>
<p>
  This is where magic comes to life and visual stories are made. I believe that design must solve a need, stir a desire for involvement, and shed light on a path that is enjoyable, trustworthy, and human.
  </p>
</section>
</Col>
</Row>

<Row xs={1} md={2} className="g-4 project-section">

  {Array.from({ length: 1 }).map((_, idx) => (
<Col >
{/* High Tech Match love project */}
      <Card>
        <Card.Img variant="top" src={ProjectThree} />
        <Card.Body>
          <Card.Title><h4>High Tech Love Match</h4></Card.Title>
          <Card.Text>
          High Tech Love Match is a dating app specifically created with the software engineer in mind. It is built to match like-minded people who are seeking a relationship.
          </Card.Text>
          <Card.Text>
          Technologies Used:
          </Card.Text>
          <Card.Text>
          React / JavaScript / HTML / CSS / Axios / Apollo / GraphQL / Node.js / Express / Express.js / express session / MongoDB / Mongoose ODM / React Router DOM / Bcrypt / Dotenv / JWT /Heroku / Firebase / Cloudinary / Github API / dayjs
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
{/* Pokedex Project */}
      <Card>
        <Card.Img variant="top" src={ProjectTwo} />
        <Card.Body>
          <Card.Title><h4>Pokédex</h4></Card.Title>
          <Card.Text>
          An online Pokédex that allows users to view and search for their favorite original 151 Pokémon.
          </Card.Text>
          <Card.Text>
          Technologies Used:
          </Card.Text>
          <Card.Text>
          HTML / CSS / Javascript / Node.js / Express / MySQL / dotenv / Heroku / jawsDB /Sequelize / Bcrypt / express-session / Handlebars / Animate.css / PokéAPI
          </Card.Text>
          <a href="https://protected-hamlet-00069.herokuapp.com/">
          <Button className="projects-btns"  variant="outline-dark">See Deployed</Button>
          </a>
          <a href="https://github.com/Lightfooted/pokedex-project">
          <Button className="projects-btns"  variant="outline-dark">View on Github</Button>
          </a>
        </Card.Body>
      </Card>
    </Col>
    <Col>
    {/* Decide Eat Project */}
      <Card>
        <Card.Img variant="top" src={ProjectOne} />
        <Card.Body>
          <Card.Title><h4>Decide Eat</h4></Card.Title>
          <Card.Text>
            A date night app crafted to offer a unique experience to users by taking a quiz that pairs you with a recipe, cocktail, and music playlist recommendation
          </Card.Text>
          <Card.Text>
            Technologies Used:
          </Card.Text>
          <Card.Text>
            HTML / CSS / Javascript / jQuery / Bulma / Spoonacular API / Spotify API
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
    {/* Budget Tracker Project */}
      <Card>
        <Card.Img variant="top" src={BudgetTracker} />
        <Card.Body>
          <Card.Title><h4>Budget Tracker</h4></Card.Title>
          <Card.Text>
            A PWA budget tracker application allows for offline access and functionality to to add expenses and deposits to their budget with or without a connection.
          </Card.Text>
          <Card.Text>
            Technologies Used:
          </Card.Text>
          <Card.Text>
            Javascript / indexedDB / Express / MongoDB / Mongoose / Heroku
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
    <Col>
    {/* Password Generator Project */}
      <Card>
        <Card.Img variant="top" src={PasswordGenerator} />
        <Card.Body>
          <Card.Title><h4>Password Generator</h4></Card.Title>
          <Card.Text>
          This password generator was developed as a way to generate a strong password that provides greater security. Before clicking the generate password button you are prompted with settings that give you the ability to confirm whether or not to include lowercase, uppercase, numeric, and/or special characters.
          </Card.Text>
          <Card.Text>
          Technologies Used:
          </Card.Text>
          <Card.Text>
          HTML / CSS / JavaScript
          </Card.Text>
          <a href="https://brookemadison.github.io/password-generator/">
          <Button className="projects-btns"  variant="outline-dark">See Deployed</Button>
          </a>
          <a href="https://github.com/brookemadison/password-generator">
          <Button className="projects-btns"  variant="outline-dark">View on Github</Button>
          </a>
        </Card.Body>
      </Card>
    </Col>
    <Col>
    {/* NoSql Social Network API Project */}
      <Card>
        <Card.Img variant="top" src={SocialNetworkAPI} />
        <Card.Body>
          <Card.Title><h4>NoSql Social Network API
</h4></Card.Title>
          <Card.Text>
          A social network API that uses a NoSQL database where users can share their thoughts, react to friends’ thoughts, and create a friend list.
          </Card.Text>
          <Card.Text>
          Technologies Used:
          </Card.Text>
          <Card.Text>
          JavaScript / MongoDB / Mongoose / Node.js / Express.js / Insomnia Core / express session / dayjs / dotenv
          </Card.Text>
          <a href="https://github.com/brookemadison/NoSql-social-network-api">
          <Button className="projects-btns"  variant="outline-dark">View on Github</Button>
          </a>
        </Card.Body>
      </Card>
    </Col>
</Row>
</Container>
   );
  };

export default Project;