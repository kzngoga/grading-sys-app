/* eslint-disable no-nested-ternary */
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const WelcomeNav = ({ compt }) => (
  <nav className="navbar navbar-expand-md navbar-dark main-nav p-3">
    <div className="container">
      <Link to="/" className="navbar-brand text-uppercase font-weight-bold">
        <span className="logo-icon mr-1">
          <FontAwesomeIcon icon={['fas', 'book']} />
        </span>
        Grad
        <span className="fat">er</span>
      </Link>
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#collapseNav"
        type="button"
      >
        <span className="navbar-icon">
          <FontAwesomeIcon icon={['fas', 'bars']} />
        </span>
      </button>

      <div className="collapse navbar-collapse" id="collapseNav">
        <ul className="navbar-nav ml-auto">
          {compt === 'home' ? (
            <>
              <li className="nav-item">
                <Link className="nav-link mr-3 first-link" to="/teacher-login">
                  <span className="mr-2 nav-icon">
                    <FontAwesomeIcon icon={['fas', 'chalkboard-teacher']} />
                  </span>
                  Teacher
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mr-3" to="/student-login">
                  <span className="mr-2 nav-icon">
                    <FontAwesomeIcon icon={['fas', 'user-graduate']} />
                  </span>
                  Student
                </Link>
              </li>
            </>
          ) : compt === 'teacher' ? (
            <>
              <li className="nav-item">
                <Link
                  className="nav-link mr-3 first-link admin-link"
                  to="/"
                  style={{ width: 175 }}
                >
                  <span className="mr-2 nav-icon">
                    <FontAwesomeIcon icon={['fas', 'user-lock']} />
                  </span>
                  Admin / D.O.S
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mr-3" to="/student-login">
                  <span className="mr-2 nav-icon">
                    <FontAwesomeIcon icon={['fas', 'user-graduate']} />
                  </span>
                  Student
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link
                  className="nav-link mr-3 first-link admin-link"
                  to="/"
                  style={{ width: 175 }}
                >
                  <span className="mr-2 nav-icon">
                    <FontAwesomeIcon icon={['fas', 'user-lock']} />
                  </span>
                  Admin / D.O.S
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mr-3" to="/teacher-login">
                  <span className="mr-2 nav-icon">
                    <FontAwesomeIcon icon={['fas', 'chalkboard-teacher']} />
                  </span>
                  Teacher
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  </nav>
);

WelcomeNav.propTypes = {
  compt: PropTypes.string.isRequired,
};

export default WelcomeNav;
