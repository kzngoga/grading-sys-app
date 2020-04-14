/* eslint-disable operator-linebreak */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../styles/dash.css';

const Avatar = ({ logout, userData }) => {
  const fname =
    userData.firstname === undefined ? '' : userData.firstname.slice(0, 1);

  const lname =
    userData.lastname === undefined ? '' : userData.lastname.slice(0, 1);

  return (
    <ul className="navbar-nav admin-avatar ml-auto">
      <li className="nav-item avatar">
        <span className="user-img">
          <span className="user-icon">{`${lname}${fname}`}</span>
          <span className="hello-user mt-2">{`${userData.lastname} ${userData.firstname}`}</span>
          <p className="pt-0 mt-0">{userData.role}</p>
        </span>
      </li>
      <li className="nav-item">
        <Link className="nav-link mr-3 first-log-out" to="/" onClick={logout}>
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
  userData: PropTypes.object.isRequired,
};

export default Avatar;
