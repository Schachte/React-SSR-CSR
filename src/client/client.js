// Startup point for the clientside application
import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import Routes from "./Routes";
import reducers from "./reducers";
import { renderRoutes } from "react-router-config";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api"
});
console.log("The initial state is");
console.log(window.INITIAL_STATE);

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

// Hydrates the view
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      {/* This is where we load the main app component since it exists at the root
      in the router config */}
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
