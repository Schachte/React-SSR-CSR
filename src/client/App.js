import React from "react";
import { renderRoutes } from "react-router-config";
import Header from "./components/Header";
import { fetchCurrentUser } from "./actions/";

import { ApolloProvider } from "react-apollo";
import client from "./Apollo";

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
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};
