import React from 'react';
import { NavLink } from 'react-router-dom';
import InfoPage from './InfoPage';

function Navigation() {
  return (
    <div>
      <nav>
        <NavLink to="/model">Models</NavLink>
        <NavLink to="/test-drive">Test Drive</NavLink>
      </nav>
    </div>
  );
}

export default Navigation;
