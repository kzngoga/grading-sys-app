/* eslint-disable global-require */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WelcomeNav from '../components/WelcomeNav';
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/index.css';
import studentLoginAction from '../redux/actions/student/studentLogin';

class StudentLogin extends Component {
  state = {
    regNum: '',
    loadText: false,
    withErrors: false,
    ErrMessage: '',
    isLoggedIn: false,
    loggedInData: {},
  };

  componentDidMount() {
    document.title = 'Student Login | Grader';
    const loggedInToken = localStorage.getItem('StudentToken');
    const loggedInData = localStorage.getItem('StudentData');

    if (loggedInToken || loggedInData) {
      this.setState({
        isLoggedIn: true,
        loggedInData: JSON.parse(loggedInData),
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { studentLogin } = nextProps;
    if (studentLogin.status === 'success') {
      this.setState({
        regNum: '',
        loadText: false,
        withErrors: false,
      });

      this.props.history.push('/student/home');
      // Check if there is any token or data saved before
      const firstToken = localStorage.getItem('StudentToken');
      const firstData = localStorage.getItem('StudentData');

      if (firstToken || firstData) {
        // Remove any token or data saved before
        localStorage.removeItem('StudentData');
        localStorage.removeItem('StudentToken');

        // Add new token or data
        localStorage.setItem('StudentToken', studentLogin.studentData.token);
        localStorage.setItem(
          'StudentData',
          JSON.stringify(studentLogin.studentData)
        );
      } else {
        // Add new token or data
        localStorage.setItem('StudentToken', studentLogin.studentData.token);
        localStorage.setItem(
          'StudentData',
          JSON.stringify(studentLogin.studentData)
        );
      }
    }

    if (studentLogin.status === 'error') {
      const {
        error: { status },
      } = studentLogin;
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
          ErrMessage: 'Reg. N0 does not exist!',
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
    const { studentLoginAction: studentLogin } = this.props;
    this.setState({
      loadText: true,
    });
    const { regNum } = this.state;
    return studentLogin({ regNum });
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleCloseAlert = () => {
    const loggedInToken = localStorage.getItem('StudentToken');
    const loggedInData = localStorage.getItem('StudentData');

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
      loadText,
      ErrMessage,
      withErrors,
      isLoggedIn,
      loggedInData,
    } = this.state;

    return (
      <>
        <WelcomeNav compt="student" />
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
                        <FontAwesomeIcon icon={['fas', 'user-graduate']} />
                      </span>{' '}
                      Student Login
                    </h6>
                    <div className="form-underline" />
                    <div className="form-group">
                      <input
                        type="text"
                        id="regNum"
                        className="form-control"
                        placeholder="Enter Reg NO."
                        onChange={this.handleChange}
                        required
                      />
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
                          <p
                            className="mt-2 logged-in"
                            style={{ color: '#60d1c1' }}
                          >
                            Or Login as{' '}
                            <Link
                              to="/student/home"
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
        <Footer
          compt="student"
          withErrors={withErrors}
          isLoggedIn={isLoggedIn}
        />
      </>
    );
  }
}

StudentLogin.propTypes = {
  studentLogin: PropTypes.object.isRequired,
  studentLoginAction: PropTypes.func.isRequired,
};

const mapStateFromProps = ({ studentLogin }) => ({ studentLogin });

export default connect(mapStateFromProps, { studentLoginAction })(
  withRouter(StudentLogin)
);
