import React from "react";
import { Modal, Button, Form, Input } from "antd";

class EditModal extends React.Component {
  state = {
    name: "",
    rollNo: "",
    course: "",
    phoneNumber: "",
    gender: "",

    visible: false,
    confirmLoading: false
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({
      ModalText: "The modal will be closed after two seconds",
      confirmLoading: true
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false
      });
    }, 2000);
  };

  handleCancel = () => {
    console.log("Clicked cancel button");
    this.setState({
      visible: false
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { visible, confirmLoading } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Edit Students
        </Button>
        <Modal
          title="Edit"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
          onChange={this.handleChange}
        >
          <div onSubmit={this.onFormSubmit}>
            <Form>
              <label>Name</label>
              <Input type="text" id="name" onChange={this.handleChange} />
              <label>Roll.No</label>
              <Input type="number" id="rollNO" onChange={this.handleChange} />
              <label>Course</label>
              <Input type="text" id="course" onChange={this.handleChange} />
              <label>Phone Number</label>
              <Input
                type="number"
                id="phoneNumber"
                onChange={this.handleChange}
              />
              <label>Gender</label>
              <Input type="text" id="gender" onChange={this.handleChange} />
            </Form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default EditModal;
