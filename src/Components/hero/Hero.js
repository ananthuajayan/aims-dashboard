import React from 'react';
import icon from '../images/user.png';
import './hero.scss'

const Hero = () => {
  return (
    <>
      <div className='hero-header'>
        <div className='hero-header-icon'>
          <img src={icon} alt="" />
          <div className='admin'>
            Admin
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
