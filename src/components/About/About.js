import './About.css';
import aboutImg from '../../Assets/about_img.svg';
import React from 'react';

const About = () => {
  return (
    <section className='about'>
      <div className='infoContainer'>
        <h2 className='sectionHeader'>About Me</h2>
        <p className='blurb'>Starting my front-end software development journey in November of 2022, I knew <span>very quickly</span> that this was for me. With no previous coding experience, I fell head over heels for programming and web development.</p>
        <p className='blurb'>I can confidently say I have a strong problem-solving mindset, a high attention to detail, and a drive to <span>learn and grow</span> as both a developer and a person.</p>
      </div>
      <img src={aboutImg} alt='' className='sectionImg'></img>
    </section>
  );
};

export default About;