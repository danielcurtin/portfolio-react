import './Header.css';
import React from 'react';

import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to='/'>DC</NavLink>
        <section className="navButtons">
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/skills'>Skills</NavLink>
          <NavLink to='/projects'>Projects</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </section>
      </nav>
    </header>
  );
};

export default Header;