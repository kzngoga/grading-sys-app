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

class ViewUsersContent extends Component {
  state = {
    noData: false,
    loadData: false,
  };

  render() {
    // const { userData } = this.props;

    const { noData, loadData } = this.state;
    const userID = 4;
    return (
      <main
        role="main"
        className="col-md-9 ml-sm-auto col-lg-10 px-4 main-content"
      >
        <div className="dash-output-section">
          <h3 className="head-title">System Users Information</h3>
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
                  <tr>
                    <td>1</td>
                    <td>Mugisha</td>
                    <td>David</td>
                    <td>0780045006</td>
                    <td>Admin</td>
                    <td>
                      <span className="on">On</span>
                    </td>
                    <td className="text-right">
                      <div className="dropdown dropdown-action dropright">
                        <Link
                          to="#"
                          role="button"
                          class="action-icon"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <FontAwesomeIcon icon={['fas', 'ellipsis-v']} />{' '}
                          <FontAwesomeIcon icon={['fas', 'caret-down']} />
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right">
                          <Link
                            to="/admin/user/edit/1"
                            class="dropdown-item table-link"
                          >
                            <FontAwesomeIcon
                              icon={['fas', 'pen']}
                              className="mr-2 table-icon"
                            />
                            Edit
                          </Link>
                          <Link
                            to={`/admin/user/profile/${userID}`}
                            class="dropdown-item table-link"
                          >
                            <FontAwesomeIcon
                              icon={['fas', 'user']}
                              className="mr-2 table-icon"
                            />
                            Profile
                          </Link>
                          <Link
                            to="#"
                            class="dropdown-item table-link"
                            data-toggle="modal"
                            data-target="#remove1"
                          >
                            <FontAwesomeIcon
                              icon={['fas', 'trash-alt']}
                              className="mr-2 table-icon"
                            />
                            Delete
                          </Link>
                        </div>
                      </div>
                    </td>
                  </tr>
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
                </table>
              </div>
              <ul className="pagination justify-content-end mt-3">
                <li className="page-item">
                  <Link
                    className="page-link"
                    to="/admin/users/view/page/1"
                    style={{ backgroundColor: '#1ca48c', color: '#f2f2f2' }}
                  >
                    <FontAwesomeIcon
                      icon={['fas', 'caret-left']}
                      className="mr-1"
                    />
                    Prev
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="/admin/users/view/page/1">
                    1
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="/admin/users/view/page/1">
                    2
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="/admin/users/view/page/1">
                    3
                  </Link>
                </li>
                <li className="page-item">
                  <Link
                    className="page-link"
                    to="/admin/users/view/page/1"
                    style={{ backgroundColor: '#1ca48c', color: '#f2f2f2' }}
                  >
                    Next
                    <FontAwesomeIcon
                      icon={['fas', 'caret-right']}
                      className="ml-1"
                    />
                  </Link>
                </li>
              </ul>
            </>
          )}
        </div>
      </main>
    );
  }
}

ViewUsersContent.propTypes = {
  userData: PropTypes.object.isRequired,
};

export default connect()(ViewUsersContent);
