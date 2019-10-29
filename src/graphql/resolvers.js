import axios from "axios";

const getUsers = () => {
  return axios.get("http://localhost:3001/users").then(res => {
    return res.data;
  });
};

const resolvers = {
  Query: {
    users: (root, args, context, info) => {
      return getUsers().then(users => {
        if (!users) {
          return null;
        }
        return users;
      });
    }
  }
};

export default resolvers;
