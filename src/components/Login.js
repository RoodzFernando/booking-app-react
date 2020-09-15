import React, { PureComponent } from 'react';
import axios from 'axios';

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
    event.preventDefault();
     axios.get(`http://localhost:3001/authentication/create?username=${this.state.username}&password=${this.state.password}`)
      .then(data => data)
      .then(response => {
        localStorage.setItem('token', response.data.jwt)
        if (response.data.jwt !== undefined) {
          this.props.history.push('/info');
        }else{
          console.log('something went wrong!')
        }
      })
      .catch (error => console.log(error)) 
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
        </form>
      </div>
    );
  }
}

export default Login;
