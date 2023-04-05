import './Skills.css';
import skillsImg from '../../Assets/skills_img.svg';
import React from 'react';

import SkillBlock from '../SkillBlock/SkillBlock';

const Skills = ({ skills }) => {
  const skillItems = skills.map(skill => <SkillBlock skill={skill}/>)

  return (
    <section className='skills'>
      <img src={skillsImg} alt="" className="sectionImg"></img>
      <div className="skillsInfo">
          <h2 className="skillsHeader">Skills</h2>
          <ul className='skillBlocks'>
            {skillItems}
          </ul>
      </div>
    </section>
  );
};

export default Skills;