/* eslint-disable react/prop-types */
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
    studentData: {},
  };

  componentDidMount() {
    const StudentToken = localStorage.getItem('StudentToken');
    const StudentData = localStorage.getItem('StudentData');

    if (!StudentToken || !StudentData) {
      alert('Please Login to continue!');
      this.setState({ redirect: true });
    } else {
      this.setState({ studentData: JSON.parse(StudentData) });
    }

    document.title = 'Student Homepage | Grader';
  }

  componentWillUnmount() {
    this.props.history.goForward();
  }

  handleLogout = () => {
    localStorage.removeItem('StudentData');
    localStorage.removeItem('StudentToken');
  };

  render() {
    const { redirect, studentData } = this.state;
    if (redirect) {
      return <Redirect to="/student/login" />;
    }

    return (
      <div>
        <h2 className="text-center mb-4">Student-Dashboard</h2>
        <h3>
          Hello
          {` ${studentData.lastname} `}
          {` ${studentData.firstname} `}
        </h3>
        <p>Logged in as Student</p>
        <Link
          to="/student/login"
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
