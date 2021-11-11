import React from "react";
import { BsGithub, BsLinkedin, BsStackOverflow } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='grow'>
      <a
        className='footer-icons'
        href='https://github.com/brookemadison'
        rel='noopener noreferrer'
        target='_blank'
      >
        <BsGithub size={28} />
      </a>
      </div>
      <div className='grow'>
      <a
        className='footer-icons'
        href='https://www.linkedin.com/in/brookemadisondesign/'
        rel='noopener noreferrer'
        target='_blank'
      >
        <BsLinkedin size={28} />
      </a>
      </div>
      <div className='grow'>
      <a
        className='footer-icons'
        href='https://stackoverflow.com/users/15789674/brooke-madison'
        rel='noopener noreferrer'
        target='_blank'
      >
        <BsStackOverflow size={28} />
      </a>
      </div>
    </footer>
  );
};

export default Footer;
