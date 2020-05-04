/* eslint-disable no-underscore-dangle */
/* eslint-disable operator-linebreak */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-deprecated */
/* eslint-disable consistent-return */
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
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import getSingleUserAction from '../../redux/actions/spAdmin/getSingleUser';
import updateUserAction from '../../redux/actions/spAdmin/updateUser';

class UpdateUsersContent extends Component {
  constructor(props) {
    super(props);
    this.role = React.createRef();
  }

  state = {
    loadText: false,
    ErrMessage: '',
    withErrors: false,
    role: '',
    noData: false,
    loadData: false,
    user: {},
    updateId: '',
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
    const { getSingleUser, updateUser } = nextProps;
    if (getSingleUser.status === 'success') {
      this.setState({
        loadData: false,
        user: getSingleUser.results,
        role: getSingleUser.results.role,
        updateId: getSingleUser.results._id,
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

    if (updateUser.status === 'success') {
      this.setState({
        loadText: false,
        withErrors: false,
      });
      alert('User Updated Successfully!, Reload the page to update the list!');
      this.props.history.push('/users/view/');
      window.location.reload();
    }
    if (updateUser.status === 'error') {
      const {
        error: { status },
      } = updateUser;
      if (status === 500) {
        this.setState({
          loadText: false,
          withErrors: true,
          ErrMessage: 'Ooops, An error Occured!, Try Again',
        });
      }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { updateUserAction: updateUser } = this.props;
    this.setState({
      loadText: true,
    });

    const { role, updateId } = this.state;
    return updateUser(updateId, { role });
  };

  HandleChange = (e) => {
    const input = e.target.id;

    this.setState({
      [input]: e.target.value,
    });
  };

  render() {
    const {
      loadText,
      ErrMessage,
      withErrors,
      loadData,
      noData,
      role,
      user,
    } = this.state;

    const { id } = this.props;

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
              {withErrors ? (
                <>
                  <div className="alert alert-danger fade show">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                    >
                      &times;
                    </button>
                    <strong>Error!</strong> {ErrMessage}
                  </div>
                </>
              ) : null}

              <h3 className="head-title">Update User</h3>
              <div className="dash-form mt-4">
                <form
                  method=""
                  id="myForm"
                  autoComplete="off"
                  className="py-3"
                  noValidate
                  onSubmit={this.handleSubmit}
                >
                  <div className="form-underline" />
                  <div className="form-row">
                    {/* Lastname */}
                    <div className="form-group col-md-4">
                      <label htmlFor="lastname">User's Lastname</label>
                      <input
                        className="form-control"
                        type="text"
                        name="lastname"
                        id="lastname"
                        value={user.lastname}
                        readOnly
                      />
                    </div>

                    {/* Firstname */}
                    <div className="form-group col-md-4 top-3">
                      <label htmlFor="firstname">User's Firstname</label>
                      <input
                        className="form-control"
                        type="text"
                        name="firstname"
                        id="firstname"
                        value={user.firstname}
                        readOnly
                      />
                      <span className="helper-text" />
                    </div>

                    {/* Email */}
                    <div className="form-group col-md-4 top-3">
                      <label htmlFor="email">User's E-mail</label>
                      <input
                        className="form-control"
                        type="text"
                        name="email"
                        id="email"
                        value={user.email}
                        readOnly
                      />
                    </div>

                    {/* Gender */}
                    <div className="form-group col-md-4 mt-3">
                      <label htmlFor="gender">User's gender</label>
                      <input
                        className="form-control"
                        type="text"
                        name="gender"
                        id="gender"
                        value={user.gender === 'M' ? 'Male' : 'Female'}
                        readOnly
                      />
                    </div>

                    {/* Address */}
                    <div className="form-group col-md-4 mt-3">
                      <label htmlFor="address">User's Address</label>
                      <input
                        className="form-control"
                        type="text"
                        name="address"
                        id="address"
                        value={user.address}
                        readOnly
                      />
                    </div>

                    {/* Role */}
                    <div className="form-group col-md-4 mt-3">
                      <label htmlFor="role">User's Role</label>
                      <select
                        className="custom-select"
                        name="role"
                        id="role"
                        onChange={this.HandleChange}
                      >
                        <optgroup label="Selected Role">
                          <option selected disabled value={role}>
                            {role === 'Admin' ? 'Administrator' : 'Dos'}
                          </option>
                        </optgroup>
                        <optgroup label="Change Role">
                          <option value="Admin">Administrator</option>
                          <option value="DOS">Dos</option>
                        </optgroup>
                      </select>
                    </div>

                    {/* mobileNo */}
                    <div className="form-group col-md-4 mt-3">
                      <label htmlFor="mobileNo">Mobile N0.</label>
                      <input
                        className="form-control"
                        type="text"
                        name="mobileNo"
                        id="mobileNo"
                        value={user.mobileNo}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <center>
                      {loadText ? (
                        <button
                          className="btn btn-secondary form-control mt-3"
                          type="button"
                          disabled
                          style={{ cursor: 'not-allowed' }}
                        >
                          <span className="spinner-border spinner-border-sm" />
                        </button>
                      ) : (
                        <button
                          className="btn btn-dark form-control mt-3"
                          type="submit"
                        >
                          <span>Update User</span>
                        </button>
                      )}
                    </center>
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
      </main>
    );
  }
}

UpdateUsersContent.propTypes = {
  getSingleUser: PropTypes.object.isRequired,
  getSingleUserAction: PropTypes.func.isRequired,
};

const mapStateFromProps = ({ getSingleUser, updateUser }) => ({
  getSingleUser,
  updateUser,
});

export default connect(mapStateFromProps, {
  getSingleUserAction,
  updateUserAction,
})(withRouter(UpdateUsersContent));
