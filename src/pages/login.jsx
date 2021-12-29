import React, { useState } from "react";

// graphql imports
import { LOGIN_USER } from "../graphql/mutation";
import { useMutation } from "@apollo/client";

// local components import
import { Form, Input, Button } from "../components";
import { useForm } from "../hooks";

let initialState = {
  firstName: "",
  lastName: "",
  username: "",
  phone: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);

  const [loginUser, { data, loading, error }] = useMutation(LOGIN_USER);
  const { handleChange, handleSubmit, values } = useForm(initialState, () =>
    console.log("hi")
  );

  return (
    <div className="container">
      <div className="card">
        <div className="card">
          <hgroup>
            <h3>back pack</h3>
            <h5>back pack... your back won't hurt</h5>
          </hgroup>
          <p>
            keep all your notes in one place, log in from anywhere on any
            device. <br />
            {isSignup
              ? `do you need an account? click here to`
              : `already have an account?`}{" "}
            <span onClick={() => setIsSignup(!isSignup)}>
              <small>{isSignup ? `signup` : `login`}</small>
            </span>
          </p>
        </div>
        <div>
          <Form onSubmit={handleSubmit}>
            {isSignup && (
              <>
                <Input
                  label="first name"
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                />
                <Input
                  label="last name"
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                />
                <Input
                  label="phone number"
                  type="tel"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                />
              </>
            )}
            <Input
              label={isSignup ? `email` : `username or email`}
              type={isSignup ? `email` : `text`}
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            <Input
              label="password"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {isSignup && (
              <Input
                label="confirm password"
                type="password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
              />
            )}
            <Button>{isSignup ? "Signup" : "Login"}</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
