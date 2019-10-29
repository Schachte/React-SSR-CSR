import React from "react";
import QueryExample from "../components/QueryExample";

const HomePage = () => {
  return (
    <div>
      <span>{Math.random()}</span>
      <QueryExample />
    </div>
  );
};

export default {
  component: HomePage
};
