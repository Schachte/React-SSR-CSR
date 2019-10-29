import ApolloClient from "apollo-client";
import { SchemaLink } from "apollo-link-schema";
import { InMemoryCache } from "apollo-cache-inmemory";
import { makeExecutableSchema } from "graphql-tools";

import typeDefs from "../../graphql/typeDefs";
import resolvers from "../../graphql/resolvers";

const initApollo = () => {
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers
  });

  const client = new ApolloClient({
    link: new SchemaLink({ schema }),
    cache: new InMemoryCache({
      dataIdFromObject: object => object.id || null
    }).restore({
      "1": { id: 1, name: "gabriel Grahams", __typename: "User" },
      "2": { id: 2, name: "Ervin Howell", __typename: "User" },
      "3": { id: 3, name: "Clementine Bauch", __typename: "User" },
      "4": { id: 4, name: "Patricia Lebsack", __typename: "User" },
      "5": { id: 5, name: "Chelsey Dietrich", __typename: "User" },
      ROOT_QUERY: {
        users: [
          { type: "id", generated: false, id: 1, typename: "User" },
          { type: "id", generated: false, id: 2, typename: "User" },
          { type: "id", generated: false, id: 3, typename: "User" },
          { type: "id", generated: false, id: 4, typename: "User" },
          { type: "id", generated: false, id: 5, typename: "User" }
        ]
      }
    })
  });

  return client;
};

const client = initApollo();
export default client;
