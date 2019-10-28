import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = ({ auth }) => {
  const authButton = auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="/api/auth/google">Login</a>
  );

  return (
    <div>
      <Link to="/">React SSR</Link>
      <div>
        <Link to="/users">Users</Link>
        <Link to="/admins">Admins</Link>
        {authButton}
      </div>
    </div>
  );
};

/**
 * Only map a piece of the state to props (the auth state)
 */
function mapStateToProps(state) {
  return { auth: state.auth };
}

// Maps the redux state to the props of the component when rendering
export default connect(mapStateToProps)(Header);
