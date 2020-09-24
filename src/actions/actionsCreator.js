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
    url: 'https://pure-badlands-43483.herokuapp.com/login',
    data: {
      username: creds.username,
      password: creds.password,
    },
  };
  store.dispatch(requestLogin(creds));
  axios(config)
    .then(response => {
      if (response.statusText) {
        store.dispatch(successLogin(creds));
        localStorage.setItem('token', response.data.token);
      }
    });
}

export {
  requestLogin,
  successLogin,
  loginError,
  loginUser,
};
