import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// graphql imports
import { LOGIN_USER, SIGNUP_USER } from "../graphql/mutation";
import { useMutation } from "@apollo/client";

// local components import
import { Form, Input, Button, Card } from "../components";
import { useForm } from "../hooks";

let initialState = {
  fullName: "",
  username: "",
  phone: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  const [
    loginUser,
    {
      data: loggedInUserData,
      loading: userLoginLoading,
      error: userLoginError,
    },
  ] = useMutation(LOGIN_USER);

  const [
    signupUser,
    {
      data: SignedUpUserData,
      loading: userSignupLoading,
      error: userSignupError,
    },
  ] = useMutation(SIGNUP_USER);

  const SubmitHandler = () => {
    if (!isSignup) {
      loginUser({
        input: {
          email: values.email,
          password: values.password,
        },
      });
    } else {
      signupUser({
        input: { ...values.confirmPassword, values },
      });
    }
  };

  const { handleChange, handleSubmit, values } = useForm(
    initialState,
    SubmitHandler
  );

  console.log(loggedInUserData);

  return (
    <Card className="login--card">
      <section id="login--card__right">
        <hgroup>
          <h3>back pack</h3>
          <h5>back pack... your back won't hurt</h5>
        </hgroup>
        <p>
          keep all your notes in one place, log in from anywhere on any device.{" "}
          <br />
          {!isSignup
            ? `do you need an account? click here to`
            : `already have an account?`}{" "}
          <span
            onClick={() => {
              navigate("/signup");
              setIsSignup(!isSignup);
            }}
          >
            <small style={{ cursor: "pointer" }}>
              {!isSignup ? `signup` : `login`}
            </small>
          </span>
        </p>
      </section>
      <section id="login--card__left">
        <Form onSubmit={handleSubmit}>
          {isSignup && (
            <>
              <Input
                label="full name"
                type="text"
                name="fullName"
                value={values.fullName}
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
          <Button className="button--success">
            {isSignup ? "Signup" : "Login"}
          </Button>
        </Form>
      </section>
    </Card>
  );
};

export default Login;
