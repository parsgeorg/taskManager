import React, { Component } from "react";
import { notFoundText } from "../../consts";

class NotFound extends Component {
  render() {
    return (
      <div className="row small-up-2 medium-up-3 large-up-4" id="Body">
        <div className="medium-12 columns">
          <h2>{notFoundText}1</h2>
        </div>
      </div>
    );
  }
}

export default NotFound;
