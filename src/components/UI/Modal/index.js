import React, { PureComponent } from "react";
import "./Modal.css";

export default class Modal extends PureComponent {
  state = {
    isModalShow: this.props.isModalShow
  };

  componentWillReceiveProps() {
    this.setState({ isModalShow: true });
  }

  closeModal = () => {
    this.setState({ isModalShow: false });
  };

  render() {
    const { isModalShow } = this.state;
    const { children } = this.props;
    let modal = (
      <div className="modalDialog">
        <div>
          <button className="close" onClick={this.closeModal}>
            X
          </button>
          <h2>{children[0]}</h2>
          <p>{children[2]}</p>
          <p>{children[3]}</p>
          <p>{children[4]}</p>
          <button className="btn btn-success" onClick={this.closeModal}>
            {children[1]}
          </button>
        </div>
      </div>
    );
    return <div>{isModalShow ? modal : ""}</div>;
  }
}
