import axios from 'axios';
import JwtDecode from 'jwt-decode';
import { loginUser } from '../actions/actionsCreator';

const registerRequest = (username, password, passwordConfirmation, setMessageError, history) => {
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
        loginUser({ username, password, passwordConfirmation });
        history.push('/model');
      }
    }).catch(err => {
      if (err.response) {
        setMessageError([...err.response.data.message]);
      }
    });
};

const modelRequest = (token, cars, setCars, setUserId) => {
  axios.get('https://pure-badlands-43483.herokuapp.com/cars')
    .then(response => response.data)
    .then(data => {
      setCars(...cars, data.data);
      setUserId(JwtDecode(token).user_id);
    });
};

const bookTestRequest = (setModel, id) => {
  axios.get(`https://pure-badlands-43483.herokuapp.com/cars/${id}`)
    .then(response => response.data)
    .then(data => {
      setModel(data.data);
    });
};

const createAppointmentRequest = (data, headers, userId, history) => {
  axios.post('https://pure-badlands-43483.herokuapp.com/appointments', data, {
    headers,
  }).then(history.push(`/test-drive/${userId}`));
};

const detailPageRequest = (setModel, id) => {
  axios.get(`https://pure-badlands-43483.herokuapp.com/cars/${id}`)
    .then(response => response.data)
    .then(data => {
      setModel(data.data);
    });
};

const testDriveRequest = (setAppointments, setUserId, token, id) => {
  axios.get(`https://pure-badlands-43483.herokuapp.com/appointments/${id}`)
    .then(response => response.data)
    .then(data => {
      setAppointments(data.data);
      setUserId(JwtDecode(token).user_id);
    });
};

export {
  registerRequest,
  modelRequest,
  bookTestRequest,
  createAppointmentRequest,
  detailPageRequest,
  testDriveRequest,
};
