import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav(props) {

  return (
    <header>
      <div>
        <nav>
          <NavLink to='/react-portfolio'>
            Home
          </NavLink>
          <NavLink to='/about'>
            About
          </NavLink>
          <NavLink to='/project'>
            Project
          </NavLink>
          <NavLink to='/resume'>
            Resume
          </NavLink>
          <NavLink to='/contact'>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Nav;