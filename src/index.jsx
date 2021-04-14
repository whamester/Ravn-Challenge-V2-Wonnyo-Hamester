import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";
import { createApolloClient } from "./utils/apolloClient";
import { ApolloProvider } from "@apollo/client";

const apolloClient = createApolloClient();

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();