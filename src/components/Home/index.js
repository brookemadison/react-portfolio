import React from 'react';
import Typewriter from 'typewriter-effect';

const Home = ()=>{
    
  return(
    <Typewriter
      options={{
        strings: ['Hi, my name is Brooke.', 'Welcome to my portfolio.', 'Please look around!'],
        autoStart: true,
        loop: true,
      }}
    />
  )
}

export default Home;