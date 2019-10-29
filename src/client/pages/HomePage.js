import React from "react";
import QueryExample from "../components/QueryExample";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import client from "../Apollo";

const random = () => {
  return Math.random();
};
const HomePage = () => {
  console.log(JSON.stringify(client.extract()));
  console.log("sup");
  return (
    <div>
      <span>{random()}</span>
      <QueryExample />
    </div>
  );
};

export default {
  component: HomePage
};
