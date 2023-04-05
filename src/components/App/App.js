import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';

import Header from '../Header/Header';
import Home from '../Home/Home';

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  };

  render() {
    return (
      <main>
        <Route path='/*' render={ () => <Header /> } />
        <Route exact path="/" render={ () => <Home /> } />
      </main>
    );
  };
};

export default App;
