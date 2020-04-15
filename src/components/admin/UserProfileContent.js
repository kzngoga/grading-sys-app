/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable comma-dangle */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-shadow */
/* eslint-disable camelcase */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class UserProfileContent extends Component {
  state = {
    noData: false,
    loadData: false,
  };

  render() {
    // const { userData } = this.props;

    const { loadData } = this.state;
    return (
      <main
        role="main"
        className="col-md-9 ml-sm-auto col-lg-10 px-4 main-content"
      >
        <div className="dash-output-section">
          <h3 className="head-title">User Profile</h3>
          <div className="card-box profile-header">
            <div className="row">
              <div className="col-md-12">
                <div className="profile-view">
                  <div className="profile-basic mt-5">
                    <div className="row">
                      <div className="col-md-2 profile-pic-div">
                        <div className="profile-img-wrap">
                          <div className="profile-img">
                            <span className="user-img">
                              {/* <span className="user-icon">MD</span> */}
                              <span className="user-icon">
                                <FontAwesomeIcon
                                  icon={['fas', 'user-lock']}
                                  className=""
                                />
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5 profilo">
                        <div className="profile-info-left">
                          <h4
                            className="user-name mt-2 mb-1"
                            style={{ color: '#2f3d51' }}
                          >
                            Mugisha David
                          </h4>
                          <small className="text-muted">Administrator</small>
                          <div
                            className="staff-id pt-1"
                            style={{ color: '#515365' }}
                          >
                            Status :{' '}
                            <span
                              style={{ color: '#4caf50', fontWeight: 'bold' }}
                            >
                              On
                            </span>
                          </div>
                          <Link
                            to="/admin/user/edit/1"
                            className="btn btn-info mt-4"
                          >
                            <FontAwesomeIcon
                              icon={['fas', 'plus']}
                              className="mr-2"
                            />
                            Edit User
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <ul className="personal-info">
                          <li className="mb-2">
                            <span className="title">Phone:</span>
                            <span className="text">
                              <a href="#">770-889-6484</a>
                            </span>
                          </li>
                          <li className="mb-2">
                            <span className="title">Email: </span>
                            <span className="text">
                              <a href="#">crnagroves@example.com</a>
                            </span>
                          </li>
                          <li className="mb-2">
                            <span className="title">Birthday:</span>
                            <span className="text">3rd March</span>
                          </li>
                          <li className="mb-2">
                            <span className="title">Address:</span>
                            <span className="text">Gakenke</span>
                          </li>
                          <li className="mb-2">
                            <span className="title">Gender:</span>
                            <span className="text">Female</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h5 className="mt-4">Other Actions</h5>
          <Link
            to="/admin/users/view"
            class="btn btn-dark profile-btn mr-3 mt-3"
          >
            <span>Back</span>
          </Link>
          <Link
            to="#"
            class="btn btn-outline-danger mt-3"
            data-toggle="modal"
            data-target="#remove1"
          >
            <FontAwesomeIcon icon={['fas', 'trash-alt']} className="mr-2" />
            Delete
          </Link>
          <div className="modal fade" id="remove1">
            <div className="modal-dialog">
              <div className="modal-content">
                {/* Modal Header */}
                <div className="modal-head-div">
                  <FontAwesomeIcon
                    icon={['fas', 'exclamation-triangle']}
                    className="ml-2 modal-icon"
                  />
                </div>

                {/* Modal body */}
                <div className="modal-body">
                  <p className="modal-par">
                    Are You Sure you want to remove{' '}
                    <span style={{ color: '#1ca48c' }}>"Mugisha David"</span>{' '}
                    from Grader's Active Users?
                  </p>
                </div>

                {/* Modal footer */}
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    data-dismiss="modal"
                    onClick=""
                  >
                    <FontAwesomeIcon
                      icon={['fas', 'check-circle']}
                      className="mr-1"
                    />
                    Remove
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    data-dismiss="modal"
                  >
                    <FontAwesomeIcon icon={['fas', 'times']} className="mr-1" />
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

UserProfileContent.propTypes = {
  userData: PropTypes.object.isRequired,
};

export default connect()(UserProfileContent);
