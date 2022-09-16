import React from 'react';
import Img from './Group 7.svg';
import Twitter from './Group 8.svg';
import Shape from './Shape.svg';
import Phone from './Fill.svg';

function Contact() {
  return (
    <div class='contact-1'>
      <div class='touch'>
        <div class='touch-head'>
          <div class='Get'>Get In Touch.</div>
          <div class='new-logo'>
            <div class='logo3'>
              <a href='https://www.linkedin.com/in/joshua-olamiposi-85419922a/'>
                {' '}
                <img class='likedin3' src={Img} alt='likedin  logo' />
              </a>
            </div>
            <div>
              <img src={Twitter} alt='' />
            </div>
            <div class='pos'>-possible</div>
          </div>
        </div>
        <div class='message'>
          <div class='email'>
            <div class='email-box'>
              <img src={Shape} alt='' />
            </div>
            <div class='com'>
              ajigbotoshojoshua2000@gmail.com
              <p>Send a message Anytime!</p>
            </div>
          </div>
          <div class='phone'>
            <div class='email-box'>
              <img src={Phone} alt='' />
            </div>
            <div class='com'>
              +2347034888137
              <p>Send a message Anytime!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
