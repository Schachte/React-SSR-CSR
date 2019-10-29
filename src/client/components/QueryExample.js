import React from "react";
import { useQuery } from "@apollo/react-hooks";
import GET_USERS from "../../graphql/queries/getUsers";

export default function QueryExample() {
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
        <p>ERROR...</p>
      </div>
    );
  }
  return (
    <ul>
      {data.users.map(user => {
        return (
          <div>
            <li>{user.name}</li>
          </div>
        );
      })}
    </ul>
  );
}
