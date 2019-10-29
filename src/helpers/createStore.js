import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../client/reducers";
import axios from "axios";

/**
 * Going to deprecate usage of the Redux store in favor of using the Apollo cache
 * for GraphQL
 */
export default req => {
  const axiosInstance = axios.create({
    baseURL: "http://react-ssr-api.herokuapp.com",
    headers: { cookie: req.get("cookie") || "" }
  });

  const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  );
  return store;
};
