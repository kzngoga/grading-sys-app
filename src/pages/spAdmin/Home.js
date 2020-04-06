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
    spAdminData: {},
  };

  componentDidMount() {
    const SpAdminToken = localStorage.getItem('SpAdminToken');
    const SpAdminData = localStorage.getItem('SpAdminData');

    if (!SpAdminToken || !SpAdminData) {
      alert('Please Login to continue!');
      this.setState({ redirect: true });
    } else {
      this.setState({ spAdminData: JSON.parse(SpAdminData) });
    }

    document.title = 'Super Admin Homepage | Grader';
  }

  handleLogout = () => {
    localStorage.removeItem('SpAdminData');
    localStorage.removeItem('SpAdminToken');
  };

  render() {
    const { redirect, spAdminData } = this.state;
    if (redirect) {
      return <Redirect to="/super/admin/login" />;
    }

    return (
      <div>
        <h2 className="text-center mb-4">Super-Admin-Dashboard</h2>
        <h4>Hello Super Admin</h4>
        <p>
          Logged in as
          {` ${spAdminData.role} `}
        </p>
        <Link
          to="/super/admin/login"
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
