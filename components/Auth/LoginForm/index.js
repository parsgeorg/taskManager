import React, { useState } from "react";
import { login } from "../../../session";
import Message from "../../UI/Messages";
import View from "./View";
import { adminLogin, adminPassword, authMessage } from "../../../consts";

// const Button = React.memo((props) => {
//   //компонент
// });

const isValidUser = ({ userName, password }) =>
  userName === adminLogin && password === adminPassword;

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showMessage, setShowMessage] = useState("");

  // changeUsername = e => this.setState({ userName: e.currentTarget.value });
  // changePassword = e => this.setState({ password: e.currentTarget.value });
  const changeUsername = ev => setUserName(ev.currentTarget.value);
  const changePassword = ev => setPassword(ev.currentTarget.value);

  const submit = ev => {
    ev.preventDefault();
    isValidUser({ userName, password }) ? login() : setShowMessage(true);
  };

  return (
    <div>
      {showMessage && <Message text={authMessage} />}
      <View
        userName={userName}
        password={password}
        changeUsername={changeUsername}
        changePassword={changePassword}
        submit={submit}
      />
    </div>
  );
};

export default LoginForm;
