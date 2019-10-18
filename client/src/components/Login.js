import React from "react";
import { useState } from "react";
import axiosWithAuth from "../utils/AxiosWithAuth";

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const onChangeHandler = e => {
    return setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/login", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("bubbles");
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="username"
          placeholder="Username"
          onChange={onChangeHandler}
        />
        <input
          type="text"
          name="password"
          placeholder="Password"
          onChange={onChangeHandler}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  )
};

export default Login;
