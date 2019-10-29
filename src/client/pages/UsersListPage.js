import React from "react";
import { useQuery } from "@apollo/react-hooks";
import GET_USERS from "../../graphql/queries/getUsers";

const UsersListPage = () => {
  const { loading, error, data } = useQuery(GET_USERS);
  const renderUsers = () => {
    if (!loading && !error) {
      return data.users.map(user => {
        return <li key={user.id}>{user.name}</li>;
      });
    }
    return <div>Nothing</div>;
  };

  return (
    <div>
      User List:
      <ul>{renderUsers()}</ul>
    </div>
  );
};

export default {
  component: UsersListPage
};
