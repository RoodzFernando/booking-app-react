/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import Models from './Models';
import { loginUser } from '../actions/actionsCreator';

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

    axios.post('https://pure-badlands-43483.herokuapp.com/users', {
      user: {
        username,
        password,
        password_confirmation: passwordConfirmation,
      },
    })
      .then(response => {
        localStorage.setItem('token', response.data.jwt);
        if (response.data.jwt !== undefined) {
          loginUser(inputValues);
          history.push('/model');
        }
      }).catch(err => {
        if (err.response) {
          setMessageError([...err.response.data.message]);
        }
      });
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
