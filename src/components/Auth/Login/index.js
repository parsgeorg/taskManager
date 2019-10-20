import React from "react";
import { isAuthorized, logout } from "../../../session";
import { authText, logoutText } from "../../../consts";

const Login = () => (
  <div>
    {!isAuthorized() ? (
      <button className="btn btn-lg btn-success">
        <a href="/login">{authText}</a>
      </button>
    ) : (
      <button onClick={logout} className="btn btn-lg btn-success">
        {logoutText}
      </button>
    )}
  </div>
);

export default Login;
