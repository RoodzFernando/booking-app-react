/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function RegisterForm({ handleChange, registerHandle, messageError }) {
  return (
    <div className="register-page">
      <form>
        <h1>Register</h1>
        <ul className="message-error">
          {
            messageError.map(msg => (
              <li key={msg}>{msg}</li>
            ))
          }
        </ul>
        <div className="field">
          <label htmlFor="username">Username:</label>
          <input type="text" placeholder="username" name="username" id="username" onChange={handleChange} />
        </div>

        <div className="field">
          <label htmlFor="password">Password:</label>
          <input type="password" placeholder="Password" name="password" id="password" onChange={handleChange} />
        </div>

        <div className="field">
          <label label htmlFor="password_confirmation">Password confirmation:</label>
          <input onChange={handleChange} type="password" placeholder="Password confirmation" name="passwordConfirmation" id="password_confirmation" />
        </div>

        <div className="btn-submit">
          <button type="submit" onClick={registerHandle}>Register</button>
          <p>
            Already a user?
            <Link to="login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

RegisterForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  registerHandle: PropTypes.func.isRequired,
  messageError: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RegisterForm;
