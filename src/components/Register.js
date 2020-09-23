/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import axios from 'axios';
import RegisterForm from './RegisterForm';
import Models from './Models';

function Register({history}) {
    const [inputValues, setInputValues] = useState({
      username: '',
      password: '',
      passwordConfirmation: '',
    })

    const {username, password, passwordConfirmation} = inputValues;
  const registerHandle = event => {
    event.preventDefault();

    axios.post('http://localhost:3001/users', {
      user: {
        username: username,
        password: password,
        password_confirmation: passwordConfirmation,
      },
    })
      .then(response => {
        localStorage.setItem('token', response.data.jwt);
        // console.log(response)
        if (response.data.jwt !== undefined) {
          history.push('/model');
        } else {
          console.log('something went wrong!');
        }
      })
      .catch(error => console.log(error));
  }

  const handleChange = event => {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  }
  // console.log(passwordConfirmation)
  const token = localStorage.getItem('token');

    if (token === null) {
      return <RegisterForm handleChange={handleChange} registerHandle={registerHandle} />
    }
    return (
      <Models />
    );
}

export default Register;
