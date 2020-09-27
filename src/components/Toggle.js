/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import JwtDecode from 'jwt-decode';
import Navigation from './Navigation';
import '../styles/Toggle.scss';

function Toggle() {
  const [toggle, setToggle] = useState(false);
  const [userId, setUserId] = useState('');

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    setUserId(JwtDecode(token).user_id);
  }, []);
  let toggleComponent = null;
  if (toggle) {
    toggleComponent = <Navigation user={userId} />;
  }
  return (
    <>
      <div className="hamburger-menu" role="button" onClick={handleToggle}>
        <i />
        <i />
        <i />
      </div>
      {toggleComponent}
    </>
  );
}

export default Toggle;
