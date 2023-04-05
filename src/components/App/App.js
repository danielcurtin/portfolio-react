import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';

import Header from '../Header/Header';
import Home from '../Home/Home';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Error from '../Error/Error';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: ['React', 'JavaScript', 'HTML', 'CSS', 'ExpressJS', 'PostgreSQL', 'Cypress', 'Mocha & Chai', 'Git & GitHub']
    };
  };

  render() {
    return (
      <main>
        <Route path='/*' render={ () => <Header /> } />
        <Route exact path='/' render={ () => <Home /> } />
        <Route exact path='/:path' render={ ({ match }) => {
          if (match.params.path === 'about') {
            return <About />
          } else if (match.params.path === 'skills') {
            return <Skills skills={this.state.skills} />
          } else if (match.params.path === 'projects') {
            return <Projects />
          } else if (match.params.path === 'contact') {
            return <Contact />
          } else {
            return <Error />
          }
        }} />
      </main>
    );
  };
};

export default App;
