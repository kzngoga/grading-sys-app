/* eslint-disable react/prop-types */
/* eslint-disable no-inner-declarations */
/* eslint-disable consistent-return */
/* eslint-disable react/state-in-constructor */
/* eslint-disable no-alert */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import '../../styles/dash.css';
import DashNav from '../../components/spAdmin/DashNav';
import SideBar from '../../components/spAdmin/SideBar';
import AddUsersContent from '../../components/spAdmin/AddUsersContent';

class AddUsers extends Component {
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

    document.title = 'Add User | Grader';
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
        <DashNav logout={this.handleLogout} spAdminData={spAdminData} />
        <div className="container-fluid">
          <div className="row">
            <SideBar />
            <AddUsersContent spAdminData={spAdminData} />
          </div>
        </div>
      </div>
    );
  }
}

export default AddUsers;
