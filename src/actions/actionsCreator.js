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
    url: 'http://localhost:3001/login',
    data: {
      username: creds.username,
      password: creds.password,
    },
  };
  store.dispatch(requestLogin(creds));
  axios(config)
    .then(response => {
      if (!response.statusText) {
        console.log('no');
      } else {
        console.log('yes');
        store.dispatch(successLogin(creds));
        console.log(store.getState());
        // console.log(response.data.token)
        localStorage.setItem('token', response.data.token);
      // props.history.push('/info')
      }
    });

  // if (!response.status === 200) {
  //   console.log(response.status)
  //   console.log('it is ok')
  // }else {
  //   console.log('request is wrong')
  // }
  // })
  // }

  // store.dispatch(requestLogin(creds))
  // const data = response;
  // console.log(data);
  // return async dispatch => {
  //   dispatch(requestLogin(creds))
  // }
}

export {
  requestLogin,
  successLogin,
  loginError,
  loginUser,
};
