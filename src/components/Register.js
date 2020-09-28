/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import Models from './Models';
import { registerRequest } from '../services/apis';

function Register() {
  const history = useHistory();
  const [inputValues, setInputValues] = useState({
    username: '',
    password: '',
    passwordConfirmation: '',
  });

  const [messageError, setMessageError] = useState([]);

  const { username, password, passwordConfirmation } = inputValues;
  const registerHandle = event => {
    event.preventDefault();
    registerRequest(username, password, passwordConfirmation, setMessageError, history);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };
  const token = localStorage.getItem('token');

  if (token === null) {
    return (
      <RegisterForm
        messageError={messageError}
        handleChange={handleChange}
        registerHandle={registerHandle}
      />
    );
  }
  return (
    <Models />
  );
}

export default Register;
