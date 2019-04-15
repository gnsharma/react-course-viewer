import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export default class Courses extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: [],
      newCourse: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({newCourse: event.target.value});
  }

  handleSubmit(event) {
    const courses = this.state.courses;
    const newCourse = this.state.newCourse;
    this.setState({
      courses: courses.concat(newCourse),
      newCourse: '',
    })
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="h1">
          Courses
          <ul className="mt-2">
          {this.state.courses.map((course, index) =>
            <li key={index} className="h5"> {course} </li>
          )}
          </ul>
        </div>
        <form onSubmit={this.handleSubmit} className="h2">
          <label>
            Add Courses
            <input type="text" value={this.state.newCourse} onChange={this.handleChange} className="d-block mt-1"/>
          </label>
          <button type="submit"> Save </button>
        </form>
      </div>
    );
  }
  }