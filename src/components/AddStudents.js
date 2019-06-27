import React from "react";
import { Modal, Button, Form, Input } from "antd";
import MyUpload from "./upLoadFile";

class AddStudents extends React.Component {
  state = {
    loading: false,
    visible: false
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Add Students
        </Button>
        <Modal
          visible={visible}
          title="Add Students"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Return
            </Button>,
            <Button
              key="submit"
              type="primary"
              loading={loading}
              onClick={this.handleOk}
            >
              Submit
            </Button>
          ]}
        >
          <div>
            <Form>
              <label>Name of the Student</label>
              <Input type="text" id="name" />
              <label>Father/Gaurdian Name</label>
              <Input type="text" id="fatherName" />
              <label>Roll.Number</label>
              <Input type="number" id="rollNum" />
              <label>Courses</label>
              <Input type="text" id="courses" />
              <label>Gender</label>
              <Input type="text" id="gender" />
              <label>Adress</label>
              <Input type="text" id="address" />
              <label>Phone Number</label>
              <Input type="number" id="phoneNumber" />
              <MyUpload />
            </Form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default AddStudents;
