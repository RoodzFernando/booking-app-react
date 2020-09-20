import React from 'react';
import github from '../images/github.svg';
import linkedin from '../images/linkedin.svg';
import twitter from '../images/twitter.svg';

function SocialLinks() {
  return (
    <div>
      <div className="social-links">
        <a href="https://github.com/RoodzFernando">
          <img src={github} alt="" />
        </a>

        <a href="https://twitter.com/RoodzFernando">
          <img src={twitter} alt="" />
        </a>

        <a href="https://www.linkedin.com/in/roodz-fernando-fleurant/">
          <img src={linkedin} alt="" />
        </a>
      </div>
    </div>
  );
}

export default SocialLinks;
