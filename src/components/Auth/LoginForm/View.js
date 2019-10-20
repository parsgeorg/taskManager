import React from "react";
import { Link } from "react-router-dom";
import { onMainPage, loginText, passwordText, authText } from "../../../consts";

const View = props => (
  <form onSubmit={props.submit}>
    <div className="container login">
      <div className="row">
        <div className="col-sm">
          <Link to="/">{onMainPage}</Link>
        </div>
        <div className="col-sm">
          <label>{loginText}</label>
          <input
            type="text"
            name="userName"
            placeholder="userName"
            onChange={props.changeUsername}
            value={props.userName}
          />
        </div>
        <div className="col-sm">
          <label>{passwordText}</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={props.changePassword}
            value={props.password}
          />
        </div>
        <div className="col-sm">
          <button className="btn btn-lg btn-success">{authText}</button>
        </div>
      </div>
    </div>
  </form>
);

export default View;
