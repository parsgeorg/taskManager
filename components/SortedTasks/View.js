import React, { Fragment } from "react";
import { isAuthorized } from "../../session";
import { setSortDirection } from "../Sorting";
import {
  notRunStatusText,
  runStatusText,
  waitingForRunStatusText,
  adminChangedText,
  titleText,
  userNameText,
  emailText,
  statusText,
  taskText,
  imgText,
  adminEditText
} from "../../consts";

const View = ({ onFocus, checkText, saveChanges, handleThClick, tasks }) => {
  const renderItem = ({ id, username, email, text, image_path, status }) => {
    return (
      <Fragment key={id}>
        <tr className="table-secondary" key={id}>
          <td>{username}</td>
          <td>{email}</td>
          {isAuthorized() ? (
            <td>
              <textarea
                name="text"
                className={`form-control `}
                rows="3"
                defaultValue={text}
                onChange={ev => {
                  checkText(ev);
                }}
                onBlur={ev => saveChanges(ev, id)}
                onFocus={onFocus}
              />
            </td>
          ) : (
            <td>{text}</td>
          )}
          <td>
            <img src={image_path} alt="" width="100px" />
          </td>

          {isAuthorized() ? (
            <td>
              <select
                className="form-control"
                defaultValue={status}
                name="status"
                id="status"
                onChange={ev => saveChanges(ev, id)}
                onFocus={onFocus}
              >
                <option value={0}>{notRunStatusText}</option>
                <option value={10}>{runStatusText}</option>
              </select>
            </td>
          ) : (
            <td>{status === 0 ? notRunStatusText : runStatusText}</td>
          )}
          {isAuthorized() && (
            <td>
              {status === 10 ? runStatusText : waitingForRunStatusText}
              {adminChangedText}
            </td>
          )}
        </tr>
      </Fragment>
    );
  };

  const sort = setSortDirection();
  return (
    <div className="tasks">
      <div className="row">
        <h1>{titleText}</h1>
      </div>

      <div className="row">
        <table className="table table-striped">
          <thead>
            <tr className="table-primary">
              <th scope="col" data-field="text" onClick={handleThClick}>
                {" "}
                {userNameText} {sort.username}
              </th>
              <th scope="col" data-field="text" onClick={handleThClick}>
                {emailText}
              </th>
              <th scope="col" data-field="text" onClick={handleThClick}>
                {" "}
                {taskText} {sort.text}
              </th>
              <th scope="col">{imgText}</th>
              <th scope="col" data-field="text" onClick={handleThClick}>
                {statusText} {sort.status}
              </th>
              {isAuthorized() && <th>{adminEditText}</th>}
            </tr>
          </thead>
          <tbody className="table-striped">
            {tasks.map(item => renderItem(item))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default View;
