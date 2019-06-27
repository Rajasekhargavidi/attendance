import React from "react";
import { Modal, Button, Icon } from "antd";

class InModal extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <span>
          <Icon
            type="info-circle"
            title="info"
            onClick={this.showModal}
            name="info"
          >
            <h4>info</h4>
          </Icon>
          info
        </span>
        <Modal
          title="Information"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Icon
            type="like"
            theme="filled"
            style={{ fontSize: "100px", textAlign: "center" }}
          />
          <h1>Now Your Are In DashBoard</h1>
        </Modal>
      </div>
    );
  }
}

export default InModal;
