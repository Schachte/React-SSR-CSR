import ApolloClient from "apollo-client";
import { SchemaLink } from "apollo-link-schema";
import { InMemoryCache } from "apollo-cache-inmemory";
import { makeExecutableSchema } from "graphql-tools";

import typeDefs from "../graphql/typeDefs";
import resolvers from "../graphql/resolvers";

const initApollo = () => {
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers
  });

  const client = new ApolloClient({
    link: new SchemaLink({ schema }),
    cache: new InMemoryCache({
      dataIdFromObject: object => object.id || null
    })
  });

  return client;
};

const client = initApollo();
export default client;
