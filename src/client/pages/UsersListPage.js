import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_USERS = gql`
  {
    users {
      id
      name
    }
  }
`;

const UsersListPage = () => {
  const { loading, error, data } = useQuery(GET_USERS);
  const renderUsers = () => {
    if (!loading && !error) {
      return data.users.map(user => {
        return <li key={user.id}>{user.name}</li>;
      });
    }
    return <div>noithing</div>;
  };

  return (
    <div>
      User List:
      <ul>{renderUsers()}</ul>
    </div>
  );
};

/**
 *
 * @param {Used to populate the serverside apollo cache} cache
 */
function loadData(cache) {
  return {};
}

export default {
  loadData,
  component: UsersListPage
};
