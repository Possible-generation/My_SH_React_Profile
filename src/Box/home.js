import React from 'react';
import Linkedin from './linkedin.svg';
import Ellipse from './Ellipse.svg';
import Twitter from './Group 8.svg';
import Img from './Group 7.svg';
import Pic from './wall 2.jpg';

function Home() {
  return (
    <div>
      <div class='header'>
        <div class='Navbar'>
          <div class='profile-pic'>
            <img class='pic' src={Pic} alt='' />
          </div>

          <div class='name'>Joshua Ajigbotosho.</div>
          <div class='nav'>
            <div class='about'>About me</div>
            <div class='services'>Service</div>
            <div class='project'>Skill</div>
            <div class='contact'>Contact Me</div>
          </div>
          <div class='logo'>
            <a href='https://www.linkedin.com/in/joshua-olamiposi-85419922a/'>
              <div class='linkin'>
                <img class='linkin2' src={Linkedin} alt='likedin  logo' />
                <img class='Ellipse2' src={Ellipse} alt='' />
              </div>
            </a>
            <div>
              <img src={Twitter} alt='' />
            </div>
          </div>
        </div>
        <div class='intro'>
          <div class='there'>HI, THERE</div>
          <div class='name2'>I AM JOSHUA AJIGBOTOSHO</div>
          <div class='top-notch'>A top-notch Developer.</div>
          <div class='small-logo'>
            <div class='logo3'>
              <a href='https://www.linkedin.com/in/joshua-olamiposi-85419922a/'>
                {' '}
                <img class='likedin3' src={Img} alt='likedin  logo' />
              </a>
            </div>
            <div>
              <img src={Twitter} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
