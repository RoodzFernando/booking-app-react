import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/steering-wheel.svg';
import Footer from './Footer';
import SocialLinks from './SocialLinks';

function Navigation() {
  return (
    <nav>
      <div className="nav-top">
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <div className="nav-links">
          <NavLink activeClassName="selected" exact to="/model">Models</NavLink>
          <NavLink activeClassName="selected" exact to="/test-drive">Test Drive</NavLink>
        </div>
      </div>

      <div className="nav-bottom">
        <SocialLinks />
        <Footer />
      </div>
    </nav>
  );
}

export default Navigation;
