import React from 'react';
import { BsGithub, BsLinkedin, BsStackOverflow } from 'react-icons/bs';



const Footer = () => {
  return (
   <footer className="footer-container">
       <a className="footer-icons grow" href="https://github.com/brookemadison" rel='noopener noreferrer' target='_blank'>
         <BsGithub />
      </a>
       <a className="footer-icons grow" href="https://www.linkedin.com/in/brookemadisondesign/" rel='noopener noreferrer' target='_blank'>
          <BsLinkedin />
      </a>
       <a className="footer-icons grow" href="https://stackoverflow.com/users/15789674/brooke-madison" rel='noopener noreferrer' target='_blank'>
          <BsStackOverflow />
        </a>
  </footer>
  )
  
}

export default Footer;



