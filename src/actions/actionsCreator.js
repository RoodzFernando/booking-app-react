import axios from 'axios';
import store from '../helpers/store';
import * as actions from './actions';

const requestLogin = creds => ({
  type: actions.LOGIN_REQUEST,
  isFetching: true,
  isAuthenticated: false,
  payload: creds,
});

const successLogin = user => ({
  type: actions.LOGIN_SUCCESS,
  isFetching: false,
  isAuthenticated: true,
  token: user,
});

const loginError = message => ({
  type: actions.LOGIN_FAILURE,
  isFetching: false,
  isAuthenticated: false,
  payload: message,
});

function loginUser(creds) {
  const config = {
    method: 'post',
    // url: 'https://pure-badlands-43483.herokuapp.com/login',
    url: 'http://localhost:3001/login',
    data: {
      username: creds.username,
      password: creds.password,
    },
  };
  store.dispatch(requestLogin(creds));
  axios(config)
    .then(response => {
      // console.log(response.status)
      if (response.status === 200) {
        console.log('bon bagay');
        //   store.dispatch(successLogin(creds));
        //   localStorage.setItem('token', response.data.token);
      }
    }).catch(err => {
      if (err.response) {
        // console.log('hey')
        // console.log(err.response.data.message)
        store.dispatch(loginError(err.response.data.message));
        // client received an error response (5xx, 4xx)
      }
    });
}

export {
  requestLogin,
  successLogin,
  loginError,
  loginUser,
};
