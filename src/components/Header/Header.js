import './Header.css';
import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <h1>DC</h1>
        <section className="navButtons">
          <button>About</button>
          <button>Skills</button>
          <button>Projects</button>
          <button>Contact</button>
        </section>
      </nav>
    </header>
  );
};

export default Header;