import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';
import logo from '../images/steering-wheel.svg'

function Navigation() {
  return (
    <nav>
    <div className="logo">
      <img src={logo} alt=""/>
    </div>

      <div className="nav-links">
        <NavLink activeClassName="selected" exact to="/model">Models</NavLink>
        <NavLink activeClassName="selected" exact to="/test-drive">Test Drive</NavLink>
      </div>

      <div className="nav-bottom">
        <Footer />
      </div>
    </nav>
  );
}

export default Navigation;
