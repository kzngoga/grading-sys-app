/* eslint-disable global-require */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import WelcomeNav2 from '../components/WelcomeNav2';
import Footer from '../components/Footer';
import '../styles/index.css';
import spAdminLoginAction from '../redux/actions/spAdmin/spAdminLogin';

class SuperAdmin extends Component {
  state = {
    isPasswordShown: false,
    isFocused: false,
    username: '',
    password: '',
    loadText: false,
    withErrors: false,
    ErrMessage: '',
  };

  componentDidMount() {
    document.title = 'Super Admin Login | Grader';
    const loggedInToken = localStorage.getItem('SpAdminToken');
    const loggedInData = localStorage.getItem('SpAdminData');

    if (loggedInToken || loggedInData) {
      this.props.history.push('/super/admin/home');
    }
  }

  componentWillReceiveProps(nextProps) {
    const { spAdminLogin } = nextProps;
    if (spAdminLogin.status === 'success') {
      this.setState({
        email: '',
        password: '',
        loadText: false,
        withErrors: false,
      });

      this.props.history.push('/super/admin/home');
      localStorage.setItem('SpAdminToken', spAdminLogin.spAdminData.token);
      localStorage.setItem(
        'SpAdminData',
        JSON.stringify(spAdminLogin.spAdminData)
      );
    }

    if (spAdminLogin.status === 'error') {
      const {
        error: { status },
      } = spAdminLogin;
      if (status === 500) {
        this.setState({
          withErrors: true,
          loadText: false,
          isLoggedIn: false,
          ErrMessage: 'Ooops, An error Occured!',
        });
      }
      if (status === 400) {
        return this.setState({
          loadText: false,
          withErrors: true,
          isLoggedIn: false,
          ErrMessage: 'Invalid Username / Password!',
        });
      }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { spAdminLoginAction: spAdminLogin } = this.props;
    this.setState({
      loadText: true,
    });
    const { username, password } = this.state;
    return spAdminLogin({ username, password });
  };

  showPassword = () => {
    const { isPasswordShown } = this.state;
    this.setState({ isPasswordShown: !isPasswordShown });
  };

  handleFocus = () => {
    this.setState({ isFocused: true });
  };

  handleFocusOut = () => {
    this.setState({ isFocused: false });
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleCloseAlert = () => {
    this.setState({ withErrors: false });
  };

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

    const {
      isPasswordShown,
      isFocused,
      loadText,
      ErrMessage,
      withErrors,
    } = this.state;
    const togglEye = isPasswordShown ? 'eye-slash' : 'eye';
    const slashColor = isPasswordShown ? '#1ca48c' : '#9199a6';
    console.log(this.props.spAdminLogin);
    return (
      <>
        <WelcomeNav2 compt="home" />
        <div className="login-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="salute mt-5">
                  <div className="salute-caption p-3">
                    <h2>
                      <span className="mr-2 nav-icon">
                        <FontAwesomeIcon icon={['fas', icon]} />
                      </span>
                      {message}
                    </h2>
                    <p className="mt-4">
                      Welcome To Grader.
                      <br />
                      Please Login To Start Using The App.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="user-login mt-4">
                  <form
                    method=""
                    onSubmit={this.handleSubmit}
                    autoComplete="off"
                    className="py-3 px-4"
                  >
                    <center>
                      <img
                        src={require('../img/avat1.png')}
                        alt="Form-Pic"
                        width="50"
                        className="form-pic"
                      />
                    </center>

                    <h6 className="mt-4 text-center">
                      <span className="">
                        <FontAwesomeIcon icon={['fas', 'user-lock']} />
                      </span>{' '}
                      Super Admin Login
                    </h6>
                    <div className="form-underline" />
                    <div className="form-group">
                      <input
                        type="text"
                        id="username"
                        className="form-control"
                        placeholder="Enter Username"
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <div className="input-group mb-3 mt-4">
                        <input
                          className="form-control"
                          type={isPasswordShown ? 'text' : 'password'}
                          id="password"
                          placeholder="Enter Password"
                          onChange={this.handleChange}
                          onFocus={this.handleFocus}
                          onBlur={this.handleFocusOut}
                          required
                        />
                        <div className="input-group-append">
                          <span
                            className="input-group-text"
                            style={{
                              borderBottomStyle: 'solid',
                              borderBottomWidth: '1px',
                              borderBottomColor: isFocused
                                ? '#1ca48c'
                                : '#9199a6',
                            }}
                          >
                            <FontAwesomeIcon
                              icon={['fas', togglEye]}
                              className="pass-icon"
                              onClick={this.showPassword}
                              style={{ color: slashColor }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <center>
                        {loadText ? (
                          <button
                            className="btn btn-secondary form-control my-3"
                            type="button"
                            disabled
                            style={{ cursor: 'not-allowed' }}
                          >
                            <span className="spinner-border spinner-border-sm" />
                          </button>
                        ) : (
                          <button
                            className="btn btn-success form-control my-3"
                            type="submit"
                            name="login"
                          >
                            <span>Login </span>
                          </button>
                        )}
                        {withErrors ? (
                          <div className="alert alert-danger fade show">
                            <button
                              type="button"
                              className="close"
                              data-dismiss="alert"
                              onClick={this.handleCloseAlert}
                            >
                              &times;
                            </button>
                            <strong>Error!</strong> {ErrMessage}
                          </div>
                        ) : null}
                      </center>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer withErrors={withErrors} compt="spAdmin" />
      </>
    );
  }
}

SuperAdmin.propTypes = {
  spAdminLogin: PropTypes.object.isRequired,
  spAdminLoginAction: PropTypes.func.isRequired,
};

const mapStateFromProps = ({ spAdminLogin }) => ({ spAdminLogin });

export default connect(mapStateFromProps, { spAdminLoginAction })(
  withRouter(SuperAdmin)
);
