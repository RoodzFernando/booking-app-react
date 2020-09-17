import * as actions from './actions';

const requestLogin = creds => {
  return {
    type: actions.LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    payload: creds,
  }
}

const successLogin = user => {
  return {
    type: actions.LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    token: user,
  }
}

const loginError = message => {
  return {
    type: actions.LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    payload: message,
  }
}

function loginUser(creds) {
  const config = {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: `username=${creds.username}&password=${creds.password}`,
  }

  return dispatch => {
    dispatch(requestLogin(creds))

    return fetch('http://localhost:3001/login', config)
    .then(response => 
      console.log(response);
      )
  }
}


export {
  requestLogin,
  successLogin,
  loginError,
}