import ApolloClient from "apollo-client";
import { SchemaLink } from "apollo-link-schema";
import { InMemoryCache } from "apollo-cache-inmemory";
import { makeExecutableSchema } from "graphql-tools";

import typeDefs from "../graphql/typeDefs";
import resolvers from "../graphql/resolvers";

const initApolloClient = ({ isClient }) => {
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers
  });

  const cache = new InMemoryCache({
    dataIdFromObject: object => object.id || null
  });

  const client = new ApolloClient({
    link: new SchemaLink({ schema }),
    cache: isClient ? cache.restore(window.__APOLLO_STATE__) : cache,
    ssrMode: !isClient
  });

  return client;
};

export default initApolloClient;
