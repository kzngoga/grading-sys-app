/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable consistent-return */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-deprecated */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable global-require */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import WelcomeNav from '../components/WelcomeNav';
import Footer from '../components/Footer';
import '../styles/index.css';
import loginAction from '../redux/actions/user/login';

class Home extends Component {
  state = {
    isPasswordShown: false,
    isFocused: false,
    email: '',
    password: '',
    loadText: false,
    withErrors: false,
    ErrMessage: '',
    isLoggedIn: false,
    loggedInData: {},
  };

  componentDidMount() {
    document.title = 'Admin / D.O.S Login | Grader';
    const loggedInToken = localStorage.getItem('AdminToken');
    const loggedInData = localStorage.getItem('AdminData');

    if (loggedInToken || loggedInData) {
      this.setState({
        isLoggedIn: true,
        loggedInData: JSON.parse(loggedInData),
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { login } = nextProps;
    if (login.status === 'success') {
      this.setState({
        email: '',
        password: '',
        loadText: false,
        withErrors: false,
      });

      if (login.userData.role === 'Admin') {
        this.props.history.push('/admin/home');
        // Check if there is any token or data saved before
        const firstToken = localStorage.getItem('AdminToken');
        const firstData = localStorage.getItem('AdminData');

        if (firstToken || firstData) {
          // Remove any token or data saved before
          localStorage.removeItem('AdminData');
          localStorage.removeItem('AdminToken');

          // Add new token or data
          localStorage.setItem('AdminToken', login.userData.token);
          localStorage.setItem('AdminData', JSON.stringify(login.userData));
        } else {
          // Add new token or data
          localStorage.setItem('AdminToken', login.userData.token);
          localStorage.setItem('AdminData', JSON.stringify(login.userData));
        }
      }

      if (login.userData.role === 'DOS') {
        this.props.history.push('/dos/home');
        // Check if there is any token or data saved before
        const firstToken = localStorage.getItem('DosToken');
        const firstData = localStorage.getItem('DosData');

        if (firstToken || firstData) {
          // Remove any token or data saved before
          localStorage.removeItem('DosData');
          localStorage.removeItem('DosToken');

          // Add new token or data
          localStorage.setItem('DosToken', login.userData.token);
          localStorage.setItem('DosData', JSON.stringify(login.userData));
        } else {
          // Add new token or data
          localStorage.setItem('DosToken', login.userData.token);
          localStorage.setItem('DosData', JSON.stringify(login.userData));
        }
      }
    }

    if (login.status === 'error') {
      const {
        error: { status },
      } = login;
      if (status === 500) {
        this.setState({
          withErrors: true,
          loadText: false,
          isLoggedIn: false,
          ErrMessage: 'Ooops, An error Occured!',
        });
      }
      if (status === 404) {
        return this.setState({
          loadText: false,
          withErrors: true,
          isLoggedIn: false,
          ErrMessage: 'Email does not exist!',
        });
      }
      if (status === 400) {
        return this.setState({
          loadText: false,
          withErrors: true,
          isLoggedIn: false,
          ErrMessage: 'Password is Incorrect!',
        });
      }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { loginAction: login } = this.props;
    this.setState({
      loadText: true,
    });
    const { email, password } = this.state;
    return login({ email, password });
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
    const loggedInToken = localStorage.getItem('AdminToken');
    const loggedInData = localStorage.getItem('AdminData');

    if (loggedInToken || loggedInData) {
      this.setState({
        isLoggedIn: true,
        withErrors: false,
      });
    } else {
      this.setState({ withErrors: false });
    }
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
      isLoggedIn,
      loggedInData,
    } = this.state;
    const togglEye = isPasswordShown ? 'eye-slash' : 'eye';
    const slashColor = isPasswordShown ? '#1ca48c' : '#9199a6';
    console.log(isLoggedIn);
    return (
      <>
        <WelcomeNav compt="home" />
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
                      Admin / D.O.S Login
                    </h6>
                    <div className="form-underline" />
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="Enter Email"
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
                          onFocus={this.handleFocus}
                          onBlur={this.handleFocusOut}
                          onChange={this.handleChange}
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

                        {isLoggedIn ? (
                          <p className="mt-2 logged-in" style={{ color: '#60d1c1' }}>
                            Or Login as{' '}
                            <Link
                              to="/admin/home"
                              style={{
                                color: '#9199a6',
                                fontWeight: 'bold',
                                textDecoration: 'underline',
                              }}
                            >
                              {`${loggedInData.lastname} ${loggedInData.firstname}`}
                            </Link>
                          </p>
                        ) : null}
                      </center>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer withErrors={withErrors} compt="home" isLoggedIn={isLoggedIn} />
      </>
    );
  }
}

Home.propTypes = {
  login: PropTypes.object.isRequired,
  loginAction: PropTypes.func.isRequired,
};

const mapStateFromProps = ({ login }) => ({ login });

export default connect(mapStateFromProps, { loginAction })(withRouter(Home));
