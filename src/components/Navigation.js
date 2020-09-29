import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../images/steering-wheel.svg';
import Footer from './Footer';
import Logout from './Logout';
import SocialLinks from './SocialLinks';

function Navigation({ user }) {
  return (
    <nav>
      <div className="nav-top">
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <div className="logout-btn">
          <Logout />
        </div>

        <div className="nav-links">
          <NavLink activeClassName="selected" exact to="/model">Models</NavLink>
          <NavLink activeClassName="selected" exact to={`/test-drive/${user}`}>Test Drive</NavLink>
        </div>
      </div>

      <div className="nav-bottom">
        <SocialLinks />
        <Footer />
      </div>
    </nav>
  );
}

Navigation.propTypes = {
  user: PropTypes.string.isRequired,
};

export default Navigation;
