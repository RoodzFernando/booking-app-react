/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loginUser } from '../actions/actionsCreator';

class Login extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    const { history } = this.props;
    event.preventDefault();
    loginUser(this.state);
    const userToken = undefined || localStorage.getItem('token');
    if (userToken) {
      history.push('/model');
    }
  }

  render() {
    return (
      <div className="login-page">
        <form>
          <h1>Login</h1>

          <div className="field">
            <label htmlFor="username">Username:</label>
            <input onChange={this.handleChange} type="text" name="username" id="username" placeholder="Username" />
          </div>

          <div className="field">
            <label htmlFor="username">Password:</label>
            <input onChange={this.handleChange} type="password" name="password" id="password" placeholder="Password" />
          </div>

          <div className="btn-login">
            <button onClick={this.handleSubmit} type="submit">log in</button>
          </div>
          <p>
            New user?
            <Link to="/">Register</Link>
          </p>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    length: PropTypes.number.isRequired,
  }).isRequired,
};

export default Login;
