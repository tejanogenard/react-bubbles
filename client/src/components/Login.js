import React from "react";
import axios from 'axios'

class Login extends React.Component{
 state = {
    credentials: {
      username: '',
      password: ''
    }
  };



 handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

login = e => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route'
  console.log(this.state.credentials)
  e.preventDefault()
  axios
    .post('http://localhost:3000/api/login', this.state.credentials)
    .then(res => console.log(res))
     .catch(err => console.log({err}))


}

  render(){
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Sign-in</button>
       </form>
    </>
  );
};
}

export default Login;
