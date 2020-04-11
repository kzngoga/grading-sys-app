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
import {
  validateLastName,
  validateFirstName,
  validateMobile,
  validateGender,
  validateRole,
  validateAddress,
  validateEmail,
} from '../Validations';

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.lastname = React.createRef();
    this.firstname = React.createRef();
    this.email = React.createRef();
    this.gender = React.createRef();
    this.address = React.createRef();
    this.role = React.createRef();
    this.mobileNo = React.createRef();
  }

  state = {
    loadText: false,
    validators: {
      isLname: false,
      isFname: false,
      isEmail: false,
      isGender: false,
      isAddress: false,
      isRole: false,
      isMobileNo: false,
    },
  };

  HandleChange = (e) => {
    const lname = this.lastname.current;
    const fname = this.firstname.current;
    const email = this.email.current;
    const gender = this.gender.current;
    const address = this.address.current;
    const role = this.role.current;
    const mobileNo = this.mobileNo.current;
    const input = e.target.id;

    // Validate Lastname
    if (input === 'lastname') {
      validateLastName(lname);
      if (validateLastName(lname)) {
        this.setState((prevState) => ({
          validators: {
            ...prevState.validators,
            isLname: true,
          },
        }));
      } else {
        this.setState((prevState) => ({
          validators: {
            ...prevState.validators,
            isLname: false,
          },
        }));
      }
    }
    // Validate Firstname
    if (input === 'firstname') {
      validateFirstName(fname);
      if (validateFirstName(fname)) {
        this.setState((prevState) => ({
          validators: {
            ...prevState.validators,
            isFname: true,
          },
        }));
      } else {
        this.setState((prevState) => ({
          validators: {
            ...prevState.validators,
            isFname: false,
          },
        }));
      }
    }
    // Validate Email
    if (input === 'email') {
      validateEmail(email);
      if (validateEmail(email)) {
        this.setState((prevState) => ({
          validators: {
            ...prevState.validators,
            isEmail: true,
          },
        }));
      } else {
        this.setState((prevState) => ({
          validators: {
            ...prevState.validators,
            isEmail: false,
          },
        }));
      }
    }
    // Validate Address
    if (input === 'address') {
      validateAddress(address);
      if (validateAddress(address)) {
        this.setState((prevState) => ({
          validators: {
            ...prevState.validators,
            isAddress: true,
          },
        }));
      } else {
        this.setState((prevState) => ({
          validators: {
            ...prevState.validators,
            isAddress: false,
          },
        }));
      }
    }
    // Validate Role
    if (input === 'role') {
      validateRole(role);
      if (validateRole(role)) {
        this.setState((prevState) => ({
          validators: {
            ...prevState.validators,
            isRole: true,
          },
        }));
      } else {
        this.setState((prevState) => ({
          validators: {
            ...prevState.validators,
            isRole: false,
          },
        }));
      }
    }
    // Validate Gender
    if (input === 'gender') {
      validateGender(gender);
      if (validateGender(gender)) {
        this.setState((prevState) => ({
          validators: {
            ...prevState.validators,
            isGender: true,
          },
        }));
      } else {
        this.setState((prevState) => ({
          validators: {
            ...prevState.validators,
            isGender: false,
          },
        }));
      }
    }
    // Validate Mobile Number
    if (input === 'mobileNo') {
      validateMobile(mobileNo);
      if (validateMobile(mobileNo)) {
        this.setState((prevState) => ({
          validators: {
            ...prevState.validators,
            isMobileNo: true,
          },
        }));
      } else {
        this.setState((prevState) => ({
          validators: {
            ...prevState.validators,
            isMobileNo: false,
          },
        }));
      }
    }
  };

  handleBlur = (e) => {
    const lname = this.lastname.current;
    const fname = this.firstname.current;
    const email = this.email.current;
    const gender = this.gender.current;
    const address = this.address.current;
    const role = this.role.current;
    const mobileNo = this.mobileNo.current;
    const input = e.target.id;

    if (input === 'lastname') {
      validateLastName(lname);
    }

    if (input === 'firstname') {
      validateFirstName(fname);
    }

    if (input === 'email') {
      validateEmail(email);
    }
    if (input === 'address') {
      validateAddress(address);
    }
    if (input === 'role') {
      validateRole(role);
    }
    if (input === 'gender') {
      validateGender(gender);
    }
    if (input === 'mobileNo') {
      validateMobile(mobileNo);
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted');
  };

  render() {
    // const { userData } = this.props;

    const {
      loadText,
      validators: {
        isFname,
        isLname,
        isEmail,
        isGender,
        isAddress,
        isRole,
        isMobileNo,
      },
    } = this.state;

    // toggling the button's disability to true / false
    let button = '';
    if (
      isFname &&
      isLname &&
      isEmail &&
      isGender &&
      isAddress &&
      isRole &&
      isMobileNo
    ) {
      button = true;
    } else {
      button = false;
    }

    return (
      <main
        role="main"
        className="col-md-9 ml-sm-auto col-lg-10 px-4 main-content"
      >
        <div className="dash-output-section">
          <h2 className="head-title">Add User</h2>
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
                  <label htmlFor="lname">User's Lastname</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter Lastname"
                    name="lastname"
                    id="lastname"
                    ref={this.lastname}
                    onChange={this.HandleChange}
                    onBlur={this.handleBlur}
                  />
                  <span className="helper-text" />
                </div>

                {/* Firstname */}
                <div className="form-group col-md-4 top-3">
                  <label htmlFor="lname">User's Firstname</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter Firstname"
                    name="firstname"
                    id="firstname"
                    ref={this.firstname}
                    onChange={this.HandleChange}
                    onBlur={this.handleBlur}
                  />
                  <span className="helper-text" />
                </div>

                {/* Email */}
                <div className="form-group col-md-4 top-3">
                  <label htmlFor="lname">User's E-mail</label>
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    id="email"
                    ref={this.email}
                    onChange={this.HandleChange}
                    onBlur={this.handleBlur}
                  />
                  <span className="helper-text" />
                </div>

                {/* Gender */}
                <div className="form-group col-md-4 mt-3">
                  <label htmlFor="gender">User's Gender</label>
                  <select
                    className="custom-select"
                    name="gender"
                    id="gender"
                    ref={this.gender}
                    onChange={this.HandleChange}
                    onBlur={this.handleBlur}
                  >
                    <option selected disabled value="0">
                      Select Gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  <span className="helper-text"></span>
                </div>

                {/* Address */}
                <div className="form-group col-md-4 mt-3">
                  <label htmlFor="address">User's Address</label>
                  <select
                    className="custom-select"
                    id="address"
                    name="address"
                    ref={this.address}
                    onChange={this.HandleChange}
                    onBlur={this.handleBlur}
                  >
                    <option selected disabled value="0">
                      Select District
                    </option>
                    <option value="Gasabo">Gasabo</option>
                    <option value="Nyarugenge">Nyarugenge</option>
                    <option value="Kicukiro">Kicukiro</option>
                    <option value="Kamonyi">Kamonyi</option>
                    <option value="Muhanga">Muhanga</option>
                    <option value="Ruhango">Ruhango</option>
                    <option value="Nyanza">Nyanza</option>
                    <option value="Huye">Huye</option>
                    <option value="Nyamagabe">Nyamagabe</option>
                    <option value="Nyaruguru">Nyaruguru</option>
                    <option value="Gisagara">Gisagara</option>
                    <option value="Gakenke">Gakenke</option>
                    <option value="Musanze">Musanze</option>
                    <option value="Rubavu">Rubavu</option>
                    <option value="Gicumbi">Gicumbi</option>
                    <option value="Burera">Burera</option>
                    <option value="Nyabihu">Nyabihu</option>
                    <option value="Rutsiro">Rutsiro</option>
                    <option value="Rubavu">Rubavu</option>
                    <option value="Nyamasheke">Nyamasheke</option>
                    <option value="Rusizi">Rusizi</option>
                    <option value="Ngororero">Ngororero</option>
                    <option value="Karongi">Karongi</option>
                    <option value="Bugesera">Bugesera</option>
                    <option value="Ngoma">Ngoma</option>
                    <option value="Gatsibo">Gatsibo</option>
                    <option value="Kirehe">Kirehe</option>
                    <option value="Nyagatare">Nyagatare</option>
                    <option value="Rwamagana">Rwamagana</option>
                    <option value="Kayonza">Kayonza</option>
                  </select>
                  <span className="helper-text"></span>
                </div>

                {/* Role */}
                <div className="form-group col-md-4 mt-3">
                  <label htmlFor="role">User's Role</label>
                  <select
                    className="custom-select"
                    name="role"
                    id="role"
                    ref={this.role}
                    onChange={this.HandleChange}
                    onBlur={this.handleBlur}
                  >
                    <option selected disabled value="0">
                      Select Role
                    </option>
                    <option value="Admin">Administrator</option>
                    <option value="Dos">Dos</option>
                  </select>
                  <span className="helper-text"></span>
                </div>

                {/* mobileNo */}
                <div className="form-group col-md-4 mt-3">
                  <label htmlFor="mobileNo">Mobile N0.</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter Mobile N0."
                    name="mobileNo"
                    id="mobileNo"
                    ref={this.mobileNo}
                    onChange={this.HandleChange}
                    onBlur={this.handleBlur}
                  />
                  <span className="helper-text"></span>
                </div>
              </div>
              <div className="form-group">
                <center>
                  {button ? (
                    loadText ? (
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
                        <span>Add User</span>
                      </button>
                    )
                  ) : (
                    <button
                      className="btn btn-secondary form-control mt-3"
                      type="button"
                      disabled
                      style={{ cursor: 'not-allowed' }}
                    >
                      Add User
                    </button>
                  )}
                </center>
              </div>
            </form>
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
