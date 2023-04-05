import './SkillBlock.css';
import React from 'react';

const SkillBlock = ({ skill }) => {
  return (
    <li className='skillItem'>{skill}</li>
  );
};

export default SkillBlock;