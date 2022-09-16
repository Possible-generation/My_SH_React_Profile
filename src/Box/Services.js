import React from 'react';
import Present from './presentation.svg';
import Const from './consultation.svg';
import Res from './responsive.svg';
import Server from './server.svg';
import Check from './checklist.svg';

function Services() {
  return (
    <div class='head'>
      <div class='render'>
        <div class=' Services-Render'>Services I Render.</div>
      </div>
      <div class='frame'>
        <div class='frame1'>
          <div class='frame11'>
            <div class='present'>
              <img src={Present} alt='' />
            </div>
            <div class='train'>Training</div>
            <div class='offers'>
              I offer instructor-led training in a way that fits with the way
              you work.
            </div>
          </div>
          <div class='frame11'>
            <div class='present'>
              <img src={Const} alt='' />
            </div>
            <div class='train'>IT Consulting.</div>
            <div class='offers'>
              I offer Information technology consulting as a field of activity
              focused on advising organizations on how best to use information
              technology in achieving their business objectives.
            </div>
          </div>
          <div class='frame11'>
            <div class='present'>
              <img src={Res} alt='' />
            </div>
            <div class='train'>Responsive Web Design</div>
            <div class='offers'>
              I Help design Mobile-friendly, worldclass websites that helps
              scales your bussiness and helps user experience get better.
            </div>
          </div>
        </div>
        <div class='frame1'>
          <div class='frame11'>
            <div class='present'>
              <img src={Server} alt='' />
            </div>
            <div class='train'>Database Development</div>
            <div class='offers'>
              With equipped skills of developing and maintaining databases i
              could help develop scalable and optimized databases for your
              organization.
            </div>
          </div>
          <div class='frame11'>
            <div class='present'>
              <img src={Present} alt='' />
            </div>
            <div class='train'>Customer Software Development</div>
            <div class='offers'>
              I help develop tehnical solutions in form of softwarres that
              answer to the needs of customer’s problems.
            </div>
          </div>
          <div class='frame11'>
            <div class='present'>
              <img src={Check} alt='' />
            </div>
            <div class='train'>Software Testing</div>
            <div class='offers'>
              I help test softwares ready for production to fish out bugs and
              give advice on how to make it scalable, usable and
              enterprise-friendly.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
