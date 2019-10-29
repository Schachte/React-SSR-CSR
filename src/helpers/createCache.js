import ApolloClient from "apollo-client";
import { SchemaLink } from "apollo-link-schema";
import { InMemoryCache } from "apollo-cache-inmemory";
import { makeExecutableSchema } from "graphql-tools";

import typeDefs from "../graphql/typeDefs";
import resolvers from "../graphql/resolvers";

const initApolloClient = ({ isServerSide }) => {
  let client;

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers
  });

  // TODO: Shrink this code to construct in one call
  if (!isServerSide) {
    console.log("Initializing the clientside cache");
    client = new ApolloClient({
      connectToDevTools: true,
      link: new SchemaLink({ schema }),
      cache: new InMemoryCache({
        dataIdFromObject: object => object.id || null
      })
    });
  } else {
    console.log("Initializing the serverside cache");
    client = new ApolloClient({
      ssrMode: true,
      connectToDevTools: true,
      link: new SchemaLink({ schema }),
      cache: new InMemoryCache({
        dataIdFromObject: object => object.id || null
      })
    });
  }
  return client;
};

export default initApolloClient;
