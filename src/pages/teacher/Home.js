/* eslint-disable no-inner-declarations */
/* eslint-disable consistent-return */
/* eslint-disable react/state-in-constructor */
/* eslint-disable no-alert */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import '../../styles/index.css';
import { Redirect, Link } from 'react-router-dom';

class Home extends Component {
  state = {
    redirect: false,
    teacherData: {},
  };

  componentDidMount() {
    const TeacherToken = localStorage.getItem('TeacherToken');
    const TeacherData = localStorage.getItem('TeacherData');

    if (!TeacherToken || !TeacherData) {
      alert('Please Login to continue!');
      this.setState({ redirect: true });
    } else {
      this.setState({ teacherData: JSON.parse(TeacherData) });
    }

    document.title = 'Teacher Homepage | Grader';
  }

  handleLogout = () => {
    localStorage.removeItem('TeacherData');
    localStorage.removeItem('TeacherToken');
  };

  render() {
    const { redirect, teacherData } = this.state;
    if (redirect) {
      return <Redirect to="/teacher-login" />;
    }

    return (
      <div>
        <h2 className="text-center mb-4">Teacher-Dashboard</h2>
        <h4>
          Hello
          {` ${teacherData.lastname} `}
          {` ${teacherData.firstname} `}
        </h4>
        <p>
          Logged in as
          {` Teacher `}
        </p>
        <Link
          to="/teacher-login"
          className="pad-link-text text-light btn btn-success"
          onClick={this.handleLogout}
        >
          Logout
        </Link>
      </div>
    );
  }
}

export default Home;
