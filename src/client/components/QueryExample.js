import React from "react";
import { useQuery } from "@apollo/react-hooks";
import GET_USERS from "../../graphql/queries/getUsers";

const QueryExample = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p>Err...</p>
      </div>
    );
  }
  return (
    <ul>
      {data.users.map(user => {
        return (
          <div>
            <li key={user.id}>{user.name}</li>
          </div>
        );
      })}
    </ul>
  );
};

export default QueryExample;
