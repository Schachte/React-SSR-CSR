import React from "react";

const HomePage = () => {
  return (
    <div>
      <div>I'm the HOME component</div>
      <button onClick={() => console.log("press me")}>Press ME</button>
    </div>
  );
};

export default {
  component: HomePage
};
