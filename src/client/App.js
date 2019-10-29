import React from "react";
import { renderRoutes } from "react-router-config";
import Header from "./components/Header";

import { ApolloProvider } from "react-apollo";
import initApolloClient from "../helpers/createCache";

const client = initApolloClient({ isServerSide: false });
const App = ({ route }) => {
  return (
    <ApolloProvider client={client}>
      <div>
        <Header />
        {renderRoutes(route.routes)}
      </div>
    </ApolloProvider>
  );
};

export default {
  component: App
};
