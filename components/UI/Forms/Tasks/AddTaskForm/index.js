import React, { useState } from "react";
import {
  clearFileField,
  validateAlpabetical,
  validateEmail,
  validateImg,
  validateMaxLength,
  validateRequired
} from "../../../../../helpers/Validation";
import {
  addTaskService,
  fileUploadService
} from "../../../../../services/Tasks";
import Modal from "../../../Modal";
import View from "./View";
import {
  newTaskText,
  ok,
  createdText,
  emailText,
  taskText,
  qtySymbolsForModal
} from "../../../../../consts";

const AddTaskForm = props => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [usernameErr, setUsernameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [textErr, setTextErr] = useState("");
  const [imgErr, setImgErr] = useState("");
  const [isValidImg, setIsValidImg] = useState(false);
  const [isModalShow, setIsModalShow] = useState(false);
  const [isShowSuccessMessage, setIsShowSuccessMessage] = useState(false);

  const checkUserName = valField => {
    let err =
      validateRequired(valField) ||
      validateAlpabetical(valField) ||
      validateMaxLength(16)(valField);

    if (err) return setUsernameErr(err);
    return setUsernameErr("");
  };

  const checkEmail = valField => {
    let err = validateRequired(valField) || validateEmail(valField);
    if (err) return setEmailErr(err);
    return setEmailErr("");
  };

  const checkText = valField => {
    let err = validateRequired(valField) || validateMaxLength(100)(valField);
    if (err) return setTextErr(err);
    return setTextErr("");
  };

  const checkImg = () => {
    let err = validateImg();
    if (err)
      return () => {
        setImgErr(err);
        setIsValidImg(false);
      };
    return () => {
      setImgErr("");
      setIsValidImg(true);
      setIsModalShow(false);
    };
  };

  const changeField = ev => {
    ev.preventDefault();
    const nameField = ev.target.name;
    const valField = ev.target.value;

    if (nameField === "username") {
      checkUserName(valField);
      setUsername(valField);
    }
    if (nameField === "email") {
      checkEmail(valField);
      setEmail(valField);
    }

    if (nameField === "text") {
      checkText(valField);
      setText(valField);
    }
    setIsModalShow(false);
  };

  const fileUpload = () => {
    fileUploadService();
    checkImg();
  };

  const addTask = ev => {
    ev.preventDefault();

    const task = {
      username,
      email,
      text
    };

    addTaskService(task).then(task => {
      props.addTask(task);

      setIsModalShow(false);
      setIsShowSuccessMessage(true);
      setUsername("");
      setEmail("");
      setText("");
    });
    document.getElementById("image-holder").innerHTML = "";
    document.getElementById("save").disabled = true;

    clearFileField();
  };

  const viewAddedTask = () => {
    setIsModalShow(true);
  };

  const modalData = [];
  modalData.push(
    newTaskText,
    ok,
    `${createdText} ${username}`,
    `${emailText} ${email}`,
    `${taskText} ${text.substr(0, qtySymbolsForModal)}`
  );

  return (
    <div>
      {isModalShow ? <Modal isModalShow={isModalShow}>{modalData}</Modal> : ""}
      <View
        username={username}
        email={email}
        text={text}
        changeField={changeField}
        usernameErr={usernameErr}
        emailErr={emailErr}
        textErr={textErr}
        imgErr={imgErr}
        isValidImg={isValidImg}
        fileUpload={fileUpload}
        isModalShow={isModalShow}
        modalData={modalData}
        viewAddedTask={viewAddedTask}
        addTask={addTask}
        isShowSuccessMessage={isShowSuccessMessage}
      />
    </div>
  );
};

export default AddTaskForm;
