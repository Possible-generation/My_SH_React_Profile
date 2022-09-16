import React from 'react';
import Twitter from './Group 8.svg';
import Img from './Group 7.svg';
import Logo1 from './Group 12.svg';
import Logo2 from './Group 14.svg';
import Logo3 from './Group 18.svg';
import Logo4 from './Group 19.svg';

function About() {
  return (
    <div>
      <div class='about2'>
        <div class='about-n'>
          <div class='about-3'>About Me</div>
          <div class='about-note'>
            Joshua Ajigbotosho is a passionate and goal driven Techpreneur whose
            interest is in using technology to build solutions to solve real
            world problems.
          </div>
          <div class='logo-new'>
            <a href='https://www.linkedin.com/in/joshua-olamiposi-85419922a/'>
              {' '}
              <img src={Img} alt='' />
            </a>
            <img src={Twitter} alt='' />
          </div>
        </div>
      </div>
      <div class='skill'>
        <div class='skill1'>
          <div class='skill-name'>My skills</div>
          <div class='skill-name2'> These are a few skills i possess</div>
        </div>
        <div class='skill2'>
          <div class='skill-21'>
            <div class='skill-logo'>
              <img src={Logo2} alt='' />
            </div>
            <div class='skill-logo2'>
              <div className='java'>JAVASCRIPT</div>
              <div class='skill-logo3'>
                {' '}
                <img src={Logo1} alt='' />
              </div>
            </div>
          </div>
          <div class='skill-21'>
            <div class='skill-logo'>
              <img src={Logo3} alt='' />
            </div>
            <div class='skill-logo2'>
              <div className='java'>HTML</div>
              <div class='skill-logo3'>
                {' '}
                <img src={Logo1} alt='' />
              </div>
            </div>
          </div>
          <div class='skill-21'>
            <div class='skill-logo'>
              <img src={Logo4} alt='' />
            </div>
            <div class='skill-logo2'>
              <div className='java'>Microsoft office</div>
              <div class='skill-logo3'>
                {' '}
                <img src={Logo1} alt='' />
              </div>
            </div>
          </div>
        </div>
        <div class='skill3'>
          <div class='skill-21'>
            <div class='skill-logo'>
              <img src={Logo3} alt='' />
            </div>
            <div class='skill-logo2'>
              <div className='java'>CSS</div>
              <div class='skill-logo3'>
                {' '}
                <img src={Logo1} alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
