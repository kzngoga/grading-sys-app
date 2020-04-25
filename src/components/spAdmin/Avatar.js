/* eslint-disable operator-linebreak */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../styles/dash.css';

const Avatar = ({ logout, spAdminData }) => {
  const spRole = spAdminData.role === undefined ? '' : spAdminData.role;
  return (
    <ul className="navbar-nav admin-avatar ml-auto">
      <li className="nav-item avatar">
        <span className="user-img">
          <span className="user-icon">SP</span>
          <span className="hello-user mt-2">Super Admin</span>
          <p className="pt-0 mt-0">{spAdminData.role}</p>
        </span>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link mr-3 first-log-out"
          to="/super/admin/login"
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
};

Avatar.propTypes = {
  logout: PropTypes.func.isRequired,
  spAdminData: PropTypes.object.isRequired,
};

export default Avatar;
