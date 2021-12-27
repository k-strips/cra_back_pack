import React, { useState } from "react";
import { Form, Input } from "../components";

const Login = () => {
  const [loginCredentials, setLoginCredentials] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setLoginCredentials({ ...loginCredentials, [name]: value });
    console.log(loginCredentials);
  };

  return (
    <div>
      <div>
        <hgroup>
          <h3>back pack</h3>
          <h5>back pack... your back won't hurt</h5>
        </hgroup>
        <p>
          keep all your notes in one place, log in from anywhere on any device.
        </p>
      </div>
      <div>
        <Form>
          <Input
            label="username or email"
            type="text"
            name="email"
            value={loginCredentials.email}
            onChange={handleChange}
          />
          <Input
            label="password"
            type="password"
            name="password"
            value={loginCredentials.password}
            onChange={handleChange}
          />
        </Form>
      </div>
    </div>
  );
};

export default Login;
