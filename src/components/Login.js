import React, { PureComponent } from 'react'

class Login extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    return (
      <form>
        <label htmlFor="username">
          Username: 
          <input type="text" name="username" id="username" placeholder="Username"/>
        </label>

        <label htmlFor="username">
          Password: 
          <input type="text" name="password" id="password" placeholder="Password"/>
        </label>

        <button type="submit">log in</button>
      </form>
    )
  }
}

export default Login