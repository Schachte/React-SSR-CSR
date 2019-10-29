import "babel-polyfill";
import express from "express";
import renderer from "./helpers/renderer";
import { matchRoutes } from "react-router-config";
import routes from "./client/Routes";
import proxy from "express-http-proxy";

const app = express();

// Any request that accesses /api will be automatically sent off to this domain
app.use(
  "/api",
  proxy("http://react-ssr-api.herokuapp.com", {
    proxyReqOptDecorator(opts) {
      opts.headers["x-forwarded-host"] = "localhost:3000";
      return opts;
    }
  })
);
app.use(express.static("public"));

/**
 * Every time we hit any route, the idea is that we create a new redux store right out of the gate.
 * We find all the routes that match the current query path from the incoming request that is coming in from the client.
 *
 * From each respective component, we ensure that we call the proper loadData function to load the component state into the redux store.
 */
app.get("/", (req, res) => {
  // const store = createStore(req);
  /**
   * We are going to read the route that the user is requesting,
   * then from there we are going to loop through all the relevant components
   * and load their data into the redux store
   */

  const promises = matchRoutes(routes, req.path).map(({ route }) => {
    // Need to populate the apollo cache here
    return null;
    // return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(() => {
    res.send(renderer(req));
  });
});

app.get("/users", (req, res) => {
  res.send([
    { id: 1, name: "Leanne Grahams" },
    { id: 2, name: "Ervin Howell" },
    { id: 3, name: "Clementine Bauch" },
    { id: 4, name: "Patricia Lebsack" },
    { id: 5, name: "Chelsey Dietrich" }
  ]);
});

app.listen(3000, () => console.log("App is running on port 3000"));
