import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
  
function Project() {
  return (
    <div style={{ display: 'block', width: 700, padding: 30 }}>
      <h1>My Portfolio</h1>
      <Carousel>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
src="react-portfolio/src/assets/carousel/decide-eat.png"
            alt="Slide one"
          />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
src="react-portfolio/src/assets/carousel/pokedex.png"
            alt="Slide Two"
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default Project;
