import React, { Component } from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_USERS = gql`
  {
    users {
      id
      name
    }
  }
`;

export default function QueryExample() {
  console.log("fuckh");
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
