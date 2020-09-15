import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      passwordConfirmation: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.registerHandle = this.registerHandle.bind(this);
  }

  registerHandle(event) {
    event.preventDefault();

    axios.post('http://localhost:3001/users', {
      user: {
        username: this.state.username,
        password: this.state.password,
        password_confirmation: this.state.passwordConfirmation,
      },
    })
    .then(response => {
        localStorage.setItem('token', response.data.jwt)
        if (response.data.jwt !== undefined) {
          this.props.history.push('/info');
        } else {
          console.log('something went wrong!')
        }
      })
      .catch(error => console.log(error))

    this.setState({
      username: '',
      password: '',
      passwordConfirmation: '',
    });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="register-page">
        <form>
          <h1>Register</h1>

          <div className="field">
            <label htmlFor="username">Username:</label>
            <input type="text" placeholder="username" name="username" id="username" onChange={this.handleChange} />
          </div>

          <div div className = "field" >
            <label htmlFor="password">Password:</label>
            <input type="password" placeholder="Password" name="password" id="password" onChange={this.handleChange} />
          </div>

          <div div className = "field" >
            <label label htmlFor="password_confirmation">Password confirmation:</label>
            <input onChange={this.handleChange} type="password" placeholder="Password confirmation" name="passwordConfirmation" id="password_confirmation" />
          </div>
          
          <div className="btn-submit">
            <button type="submit" onClick={this.registerHandle}>Register</button>
              <p>
                Already a user?
                <Link to="login">Login</Link>
              </p>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
