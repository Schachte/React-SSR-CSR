import React from "react";
import { Link } from "react-router-dom";

const Header = ({ auth }) => {
  return (
    <div>
      <Link to="/">Home Component</Link>
      <div>
        <Link to="/query">Query</Link>
        <Link to="/users">Users</Link>
      </div>
    </div>
  );
};

export default Header;
