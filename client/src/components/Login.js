import React from "react";
import axios from 'axios'

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  
  const state = {
    credentials: {
      username: '',
      password: ''
    }
  };



  const handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  axios
    .post(`http://localhost:5000/api/login`, state.credentials)


  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <form>
          <input
            type="text"
            name="username"
            value={state.credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={state.credentials.password}
            onChange={handleChange}
          />
       </form>
    </>
  );
};

export default Login;
