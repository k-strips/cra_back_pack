import React from "react";
// import { Router } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql/client";

ReactDOM.render(
  <React.StrictMode>
    {/* <Router> */}
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
    {/* </Router> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
