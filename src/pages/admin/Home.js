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
    userData: {},
  };

  componentDidMount() {
    const AdminToken = localStorage.getItem('AdminToken');
    const AdminData = localStorage.getItem('AdminData');

    if (!AdminToken || !AdminData) {
      alert('Please Login to continue!');
      this.setState({ redirect: true });
    } else {
      this.setState({ userData: JSON.parse(AdminData) });
    }

    document.title = 'Admin Homepage | Grader';
  }

  handleLogout = () => {
    localStorage.removeItem('AdminData');
    localStorage.removeItem('AdminToken');
  };

  render() {
    const { redirect, userData } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <h2 className="text-center mb-4">Admin-Dashboard</h2>
        <h4>
          Hello
          {` ${userData.lastname} `}
          {` ${userData.firstname} `}
        </h4>
        <p>
          Logged in as
          {` ${userData.role} `}
        </p>
        <Link
          to="/"
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
