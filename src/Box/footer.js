import React from 'react';
import Twitter from './Group 8.svg';
import Img from './Group 7.svg';

function footer() {
  return (
    <div>
      <div class='footer'>
        <div class='footer-name'>
          <div class='jos'>Joshua Ajigbotosho</div>
        </div>
        <div class='footer-logo'>
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
        <div class='copyright'>
          <div class='copy'>copyright &copy; 2022| All rights Reserved</div>
        </div>
      </div>
    </div>
  );
}

export default footer;
