import JwtDecode from 'jwt-decode';
import React from 'react';
import Navigation from './Navigation';

function InfoPage() {
  const token_info = localStorage.getItem('token');
  const decoded_token = JwtDecode(token_info);
  console.log(decoded_token);
  return (
    <div>
      <div className="nav-side">
        <Navigation />
      </div>

      <div className="body-app">
        <h1>
          Hello my user
          {decoded_token.username}
        </h1>
      </div>
    </div>
  );
}

export default InfoPage;
