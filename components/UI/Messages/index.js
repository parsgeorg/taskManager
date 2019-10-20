import React from "react";

const Message = ({ text }) => (
  <div className="alert alert-success alert-dismissible fade show successedAddedTaskMessage">
    <button type="button" className="close" data-dismiss="alert">
      &times;
    </button>
    <strong>{text}</strong>
  </div>
);
export default Message;
