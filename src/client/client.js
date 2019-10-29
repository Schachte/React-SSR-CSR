// Startup point for the clientside application
import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { renderRoutes } from "react-router-config";

console.log("This is getting called");
ReactDOM.hydrate(
  <BrowserRouter>
    <div>{renderRoutes(Routes)}</div>
  </BrowserRouter>,
  document.querySelector("#root")
);
