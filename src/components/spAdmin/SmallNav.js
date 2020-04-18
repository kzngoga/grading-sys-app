import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import '../../styles/dash.css';

const SmallNav = ({ logout }) => (
  <ul className="navbar-nav ml-auto small-nav">
    <li className="nav-item">
      <NavLink
        exact
        className="nav-link"
        to="/super/admin/home"
        activeClassName="active"
      >
        <span className="mr-1">
          <FontAwesomeIcon icon={['fas', 'home']} />
        </span>
        Home
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink
        className="nav-link"
        to="/users/add/new"
        activeClassName="active"
      >
        <span className="mr-1">
          <FontAwesomeIcon icon={['fas', 'user-edit']} />
        </span>
        Add User
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/users/view/" activeClassName="active">
        <span className="mr-1">
          <FontAwesomeIcon icon={['fas', 'user-lock']} />
        </span>
        System Users
        <span className="badge badge-secondary ml-2">23</span>
      </NavLink>
    </li>
    <li className="nav-item">
      <Link
        to="/super/admin/login"
        className="nav-link"
        activeClassName="active"
        onClick={logout}
      >
        <span className="mr-1">
          <FontAwesomeIcon icon={['fas', 'sign-out-alt']} />
        </span>
        Logout
      </Link>
    </li>
  </ul>
);

SmallNav.propTypes = {
  logout: PropTypes.func.isRequired,
};
export default SmallNav;
