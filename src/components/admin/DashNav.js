/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-nested-ternary */
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import Avatar from './Avatar';
import SmallNav from './SmallNav';
import '../../styles/dash.css';

const DashNav = ({ logout, userData }) => (
  <nav className="navbar navbar-expand-md navbar-dark main-nav p-3 fixed-top">
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
        <Avatar logout={logout} userData={userData} />
        <SmallNav logout={logout} userData={userData} />
      </div>
    </div>
  </nav>
);

DashNav.propTypes = {
  logout: PropTypes.func.isRequired,
  userData: PropTypes.object.isRequired,
};

export default DashNav;
