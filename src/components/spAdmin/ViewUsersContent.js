/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-deprecated */
/* eslint-disable react/prop-types */
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
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import getUsersAction from '../../redux/actions/spAdmin/getUsers';
import Pagination from '../Pagination';

class ViewUsersContent extends Component {
  state = {
    loadData: false,
    noData: false,
    users: [],
    itemsPerPage: 2,
    currentPage: 1,
    showAlert: true,
  };

  componentWillMount() {
    const { getUsersAction: getUsers } = this.props;
    getUsers();

    this.setState({
      loadData: true,
    });
  }

  componentWillReceiveProps(nextProps) {
    const { getUsers } = nextProps;
    if (getUsers.status === 'success') {
      this.setState({
        loadData: false,
        users: getUsers.results,
      });
    }
    if (getUsers.status === 'error') {
      const {
        error: { status },
      } = getUsers;
      if (status === 500) {
        this.setState({
          loadData: false,
          noData: false,
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

  componentWillUnmount() {
    localStorage.removeItem('showAlertUsers');
  }

  refreshPage = () => {
    window.onbeforeunload = (e) => {
      localStorage.setItem('showAlertUsers', false);
    };
    window.location.reload();
  };

  handleCloseAlert = () => {
    localStorage.setItem('showAlertUsers', false);
  };

  render() {
    const { noData, loadData, users, itemsPerPage, currentPage } = this.state;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = users
      ? users.slice(indexOfFirstItem, indexOfLastItem)
      : null;
    const paginate = (pageNumber) => this.setState({ currentPage: pageNumber });
    let dataNum = 0;
    const submitted = this.props.location.state
      ? this.props.location.state.submitted
      : null;
    const message = this.props.location.state
      ? this.props.location.state.message
      : null;

    const alertShow = localStorage.getItem('showAlertUsers');
    const showAlert = alertShow || null;
    return (
      <main
        role="main"
        className="col-md-9 ml-sm-auto col-lg-10 px-4 main-content"
      >
        <div className="dash-output-section">
          {submitted && showAlert === null ? (
            <>
              <div className="alert alert-success fade show">
                <button
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  onClick={this.handleCloseAlert}
                >
                  &times;
                </button>
                <strong>Success!</strong>
                {` ${message} `}
                <span
                  className="alert-link"
                  onClick={this.refreshPage}
                  style={{ cursor: 'pointer' }}
                >
                  Reload
                </span>
                , to update the list.
              </div>
            </>
          ) : null}

          <h3 className="head-title">
            System Users ({loadData ? '-' : noData ? '0' : users.length})
          </h3>
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
            <div className="table-responsive mt-5">
              <table className="table table-striped">
                <thead>
                  <th
                    colSpan="14"
                    style={{ textAlign: 'center', fontSize: 25 }}
                  >
                    Empty
                  </th>
                </thead>
                <tr>
                  <td
                    colSpan="14"
                    style={{ textAlign: 'center', fontSize: 25 }}
                  >
                    No records found!
                  </td>
                </tr>
              </table>
            </div>
          ) : (
            <>
              <form className="form-inline justify-content-end mt-5">
                <input
                  type="text"
                  name="sBox"
                  id="sBox"
                  placeholder="Search Users"
                  className="form-control"
                />
                <button
                  type="submit"
                  name="search"
                  id="search"
                  className="btn btn-dark"
                >
                  <FontAwesomeIcon
                    icon={['fas', 'search']}
                    aria-hidden="true"
                  />
                </button>
              </form>
              <div className="table-responsive mt-3">
                <table className="table table-striped">
                  <thead>
                    <th>#</th>
                    <th>Lastname</th>
                    <th>Firstname</th>
                    <th>Phone N0.</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Action</th>
                  </thead>
                  <tbody>
                    {currentItems.map((user) => {
                      dataNum += 1;
                      return (
                        <tr key={user._id}>
                          <td>{dataNum}</td>
                          <td>{user.lastname}</td>
                          <td>{user.firstname}</td>
                          <td>{user.mobileNo}</td>
                          <td>{user.role}</td>
                          <td>
                            <span
                              className={user.status === 'ON' ? 'on' : 'off'}
                            >
                              {user.status}
                            </span>
                          </td>
                          <td className="text-right">
                            <div className="dropdown dropdown-action dropright">
                              <Link
                                to="#"
                                role="button"
                                className="action-icon"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <FontAwesomeIcon
                                  icon={['fas', 'ellipsis-v']}
                                  className="mr-1"
                                />
                                <FontAwesomeIcon icon={['fas', 'caret-down']} />
                              </Link>
                              <div className="dropdown-menu dropdown-menu-right">
                                <Link
                                  to={`/user/edit/${user._id}`}
                                  className="dropdown-item table-link"
                                >
                                  <FontAwesomeIcon
                                    icon={['fas', 'pen']}
                                    className="mr-2 table-icon"
                                  />
                                  Edit
                                </Link>
                                <Link
                                  to={{
                                    pathname: `/user/profile/${user._id}`,
                                    state: { test: 'Hello' },
                                  }}
                                  className="dropdown-item table-link"
                                >
                                  <FontAwesomeIcon
                                    icon={['fas', 'user']}
                                    className="mr-2 table-icon"
                                  />
                                  Profile
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item table-link"
                                  data-toggle="modal"
                                  data-target="#remove1"
                                >
                                  <FontAwesomeIcon
                                    icon={['fas', 'trash-alt']}
                                    className="mr-2 table-icon"
                                  />
                                  Remove
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="modal fade" id="remove1">
                <div className="modal-dialog">
                  <div className="modal-content">
                    {/* Modal Header */}
                    <div className="modal-header">
                      <h4 className="modal-title"> Remove User</h4>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                      >
                        &times;
                      </button>
                    </div>
                    {/* Modal body */}
                    <div className="modal-body">
                      Are You Sure you want to remove "Mugisha David" from
                      Grader's Active Users?
                    </div>

                    {/* Modal footer */}
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-outline-success"
                        data-dismiss="modal"
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
              <Pagination
                itemsPerPage={itemsPerPage}
                totalPosts={loadData ? '-' : noData ? '0' : users.length}
                paginate={paginate}
                currentPage={currentPage}
                path="/users/view/page/"
              />
            </>
          )}
        </div>
      </main>
    );
  }
}

const mapStateFromProps = ({ getUsers }) => ({ getUsers });

export default connect(mapStateFromProps, { getUsersAction })(
  withRouter(ViewUsersContent)
);
