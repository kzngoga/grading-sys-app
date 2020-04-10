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
import DashNav from '../../components/admin/DashNav';
import SideBar from '../../components/admin/SideBar';
import MainContent from '../../components/admin/MainContent';

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

    document.title = 'Admin - Homepage | Grader';
  }

  componentWillUnmount() {
    this.props.history.goForward();
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
        <DashNav logout={this.handleLogout} userData={userData}/>
        <div className="container-fluid">
          <div className="row">
            <SideBar />
            <MainContent userData={userData} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
