/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-deprecated */
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
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import getSingleUserAction from '../../redux/actions/spAdmin/getSingleUser';

class UserProfileContent extends Component {
  state = {
    noData: false,
    loadData: false,
    user: {},
  };

  componentWillMount() {
    const { getSingleUserAction: getSingleUser, id } = this.props;
    getSingleUser(id);

    this.setState({
      loadData: true,
    });
  }

  componentWillReceiveProps(nextProps) {
    const { id } = this.props;
    const { getSingleUser } = nextProps;
    if (getSingleUser.status === 'success') {
      this.setState({
        loadData: false,
        user: getSingleUser.results,
      });
    }
    if (getSingleUser.status === 'error') {
      const {
        error: { status, message },
      } = getSingleUser;
      if (status === 500) {
        this.setState({
          loadData: false,
          noData: false,
        });
      }

      if (
        status === 500 &&
        message ===
          `Cast to ObjectId failed for value "${id}" at path "_id" for model "User"`
      ) {
        this.setState({
          loadData: false,
          noData: true,
        });
      }
      if (status === 404) {
        this.setState({
          loadData: false,
          noData: true,
        });
      }
    }
  }

  render() {
    const { id } = this.props;
    const { loadData, user, noData } = this.state;
    return (
      <main
        role="main"
        className="col-md-9 ml-sm-auto col-lg-10 px-4 main-content"
      >
        <div className="dash-output-section">
          {loadData ? (
            <div className="text-center mt-3 loader">
              <div
                className="spinner-border text-darker spinner-border"
                role="status"
              >
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : noData ? (
            <div className="mt-5 text-center">
              <FontAwesomeIcon
                icon={['fas', 'folder-open']}
                className="mr-1"
                style={{ color: '#2f3d51', marginTop: 120, fontSize: 60 }}
              />
              <h2 className="text-center" style={{ color: '#2f3d51' }}>
                User Not found!
              </h2>
            </div>
          ) : (
            <>
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
                                {`${user.lastname} ${user.firstname}`}
                              </h4>
                              <small className="text-muted">
                                {user.role === 'Admin'
                                  ? 'Administrator'
                                  : 'Dean Of Studies'}
                              </small>
                              <div
                                className="staff-id pt-1"
                                style={{ color: '#515365' }}
                              >
                                Status :{' '}
                                <span
                                  style={{
                                    color:
                                      user.status === 'ON'
                                        ? '#4caf50'
                                        : '#f44336',
                                    fontWeight: 'bold',
                                  }}
                                >
                                  On
                                </span>
                              </div>
                              <Link
                                to={`/user/edit/${id}`}
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
                                  <a href="#">{user.mobileNo}</a>
                                </span>
                              </li>
                              <li className="mb-2">
                                <span className="title">Email: </span>
                                <span className="text">
                                  <a href="#">{user.email}</a>
                                </span>
                              </li>
                              <li className="mb-2">
                                <span className="title">Address:</span>
                                <span className="text">{user.address}</span>
                              </li>
                              <li className="mb-2">
                                <span className="title">Gender:</span>
                                <span className="text">
                                  {user.gender === 'M' ? 'Male' : 'Female'}
                                </span>
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
              <Link to="/users/view" class="btn btn-dark profile-btn mr-3 mt-3">
                <span>Back</span>
              </Link>
              <Link
                to="#"
                class="btn btn-outline-danger mt-3"
                data-toggle="modal"
                data-target="#remove1"
              >
                <FontAwesomeIcon icon={['fas', 'trash-alt']} className="mr-2" />
                Remove
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
                        <span style={{ color: '#1ca48c' }}>
                          "Mugisha David"
                        </span>{' '}
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
                        <FontAwesomeIcon
                          icon={['fas', 'times']}
                          className="mr-1"
                        />
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    );
  }
}

UserProfileContent.propTypes = {
  getSingleUserAction: PropTypes.object.isRequired,
  getSingleUser: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
};

const mapStateFromProps = ({ getSingleUser }) => ({ getSingleUser });

export default connect(mapStateFromProps, { getSingleUserAction })(
  withRouter(UserProfileContent)
);
