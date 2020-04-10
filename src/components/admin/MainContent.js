/* eslint-disable comma-dangle */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-shadow */
/* eslint-disable camelcase */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ActivityDiv from './ActivityDiv';

class MainContent extends Component {
  render() {
    const date = new Date();
    const time = date.getHours();
    let message = '';
    let icon = '';
    if (time >= 5 && time < 12) {
      message = 'Good Morning';
      icon = 'sun';
    } else if (time >= 12 && time < 18) {
      message = 'Good Afternoon';
      icon = 'cloud-sun';
    } else if (time >= 18 && time < 23) {
      message = 'Good Evening';
      icon = 'cloud-moon';
    } else {
      message = 'Good Night';
      icon = 'moon';
    }

    const { userData } = this.props;

    return (
      <main
        role="main"
        className="col-md-9 ml-sm-auto col-lg-10 px-4 main-content"
      >
        <div className="dash-output-section">
          <div className="welcome">
            <h1 className="text-center">
              <span className="mr-1">
                <FontAwesomeIcon icon={['fas', icon]} />
              </span>
              {message}
            </h1>
            <p className="text-center">
              Welcome to Grader App, &nbsp;
              <span>{`Mr. ${userData.lastname} ${userData.firstname}!`}</span>
            </p>
          </div>
          <div className="activities">
            <div className="row">
              <ActivityDiv
                name="Users"
                path="/admin/users/view"
                bgColor="bg-info"
                borderColor="#17a2b8"
                icon="user-lock"
                iconHead="fas"
                length="20"
              />
              <ActivityDiv
                name="Teachers"
                path="/admin/teachers/view"
                bgColor="bg-success"
                borderColor="#28a745"
                icon="chalkboard-teacher"
                iconHead="fas"
                length="0"
              />
              <ActivityDiv
                name="Students"
                path="/admin/students/view"
                bgColor="bg-secondary"
                borderColor="#6c757d"
                icon="user-graduate"
                iconHead="fas"
                length="20"
              />
            </div>
          </div>
          <div className="settings-btn">
            <Link
              className="btn btn-dark back-btn mr-3"
              to="/admin/edit/password"
              data-target="#reset"
              data-toggle="modal"
            >
              <span>
                Reset Password
                <FontAwesomeIcon icon={['fas', 'user-lock']} className="ml-2" />
              </span>
            </Link>
            <Link
              className="btn btn-dark back-btn mr-3"
              to="/admin/edit/profile"
            >
              <span>
                Edit Profile
                <FontAwesomeIcon icon={['fas', 'user-edit']} className="ml-2" />
              </span>
            </Link>
          </div>
        </div>
      </main>
    );
  }
}

MainContent.propTypes = {
  userData: PropTypes.object.isRequired,
};

export default connect()(MainContent);
