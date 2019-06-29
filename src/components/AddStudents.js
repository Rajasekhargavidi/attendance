import React, { Component } from "react";

class AddStudents extends Component {
  state = {
    studentName: "",
    parentName: "",
    course: "",
    address: "",
    rollNumber: "",
    gender: "",
    inputGroupFile01: ""
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div
        className="user-form"
        style={{ marginTop: "60px", marginRight: "100px", marginLeft: "100px" }}
      >
        <form onSubmit={this.handleFormSubmit}>
          <div class="form-group row">
            <label for="studentName" class="col-sm-2 col-form-label">
              Name of the Student
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="studentName"
                placeholder="Enter the student name"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="parentName" class="col-sm col-form-label">
              Name of the Parent
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="parentName"
                placeholder="Enter the parent name"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="course" class="col-sm-2 col-form-label">
              Course
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="course"
                placeholder="Enter the Course"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="Address" class="col-sm-2 col-form-label">
              Address
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="address"
                placeholder="Fill your present address"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="rollNUmber" class="col-sm-2 col-form-label">
              Roll Number
            </label>
            <div class="col-sm-10">
              <input
                type="number"
                class="form-control"
                id="rollNumber"
                placeholder="Enter your Roll Number"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="rollNumber" class="col-sm-2 col-form-label">
              Gender
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="gender"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div class="custom-file">
            <label for="Upload" class="col-sm-2 col-form-label">
              Upload
            </label>
            <input
              type="file"
              class="custom-file-input"
              id="inputGroupFile01"
              onChange={this.handleChange}
            />
            <label class="custom-file-label" for="inputGroupFile01">
              Choose file
            </label>
          </div>
          <button type="submit" class="btn btn-primary btn-lg">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddStudents;
