const typeDefs = `
type User {
  id: Int
  name: String
}

type Query {
  users: [User]
}
`;

export default typeDefs;
