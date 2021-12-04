import React from "react";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="home-section">
      <Typewriter
        options={{
          strings: [
            "Hi, I'm Brooke.",
            "Welcome to my portfolio.",
            "Please look around!",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default Home;
