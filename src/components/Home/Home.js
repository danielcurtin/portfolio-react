import './Home.css';
import React from 'react';

const Home = () => {
  return (
    <section className='home'>
      <div className='intro'>
        <p className='hiTxt'>Hi, My name is</p>
        <h1>Daniel Curtin.</h1>
        <h2>I'm a Frontend Software Engineer.</h2>
        <p className='blurb'>I'm a quick learner with a problem solving mindset who's constantly looking for new technologies to learn and new projects to work on.</p>
      </div>
      <div className='homeBg'></div>
    </section>
  );
};

export default Home;