// Startup point for the clientside application
import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { renderRoutes } from "react-router-config";
import { ApolloProvider } from "react-apollo";
import initApolloClient from "../helpers/createCache";

const client = initApolloClient({ isServerSide: false });
ReactDOM.hydrate(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </ApolloProvider>,

  document.querySelector("#root")
);
