import React from 'react'
import axios from 'axios';

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      passwordConfirmation: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.registerHandle = this.registerHandle.bind(this)
  }

  registerHandle(event) {
    event.preventDefault()
    console.log('Form submitted!')
    // fetch('http://localhost:3001/signup', 
    // {method: 'POST', mode: 'no-cors', body: {
    //   username: this.state.username,
    //   password: this.state.password,
    //   password_confirmation: this.state.passwordConfirmation
    // }}
    // ).then(response => console.log(response))
    // .then(data=> console.log(data.json()))

    axios.post('http://localhost:3001/users', {
      user:{username: this.state.username,
      password: this.state.password,
      password_confirmation: this.state.passwordConfirmation}
    }).then(
      response => console.log(response)
    )

    this.setState({
      username: '',
      password: '',
      passwordConfirmation: ''
    })
  }

  handleChange(event){
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }
  render() {
     return (
    <form>
      <label htmlFor="username">
        Username:
        <input type="text" placeholder="username" name="username" id="username" onChange={this.handleChange} />
      </label>

      <label htmlFor="password">
        Password:
        <input type="text" placeholder="Password" name="password" id="password" onChange={this.handleChange} />
      </label>

      <label label htmlFor = "password_confirmation">
        Password confirmation:
        <input onChange={this.handleChange} type="text" placeholder="Password confirmation" name="passwordConfirmation" id="password_confirmation"/>
      </label>
      <button type="sumit" onClick={this.registerHandle} >Register</button>
      <div>
      <h1>
        username: {this.state.username}

      </h1>

      <h1>

        password: {this.state.password}
      </h1>

      <h1>

        password confirmation: {this.state.passwordConfirmation}
      </h1>
      </div>
    </form>
  )
  }
}

export default Register
