/* eslint-disable global-require */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WelcomeNav from '../components/WelcomeNav';
import Footer from '../components/Footer';

class Home extends Component {
  state = {
    isPasswordShown: false,
    isFocused: false,
  };

  componentDidMount() {
    document.title = 'Teacher Login | Grader';
  }

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

    const { isPasswordShown, isFocused } = this.state;
    const togglEye = isPasswordShown ? 'eye-slash' : 'eye';
    const slashColor = isPasswordShown ? '#1ca48c' : '#9199a6';

    return (
      <>
        <WelcomeNav compt="teacher" />
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
                    onSubmit=""
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
                        <FontAwesomeIcon icon={['fas', 'chalkboard-teacher']} />
                      </span>{' '}
                      Teacher Login
                    </h6>
                    <div className="form-underline" />
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="Enter Email"
                        onChange=""
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
                          onChange=""
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
                        <button
                          className="btn btn-success form-control my-3"
                          type="submit"
                          name="login"
                        >
                          <span>Login </span>
                        </button>
                      </center>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Home;
