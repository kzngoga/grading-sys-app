/* eslint-disable no-shadow */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import getUsersAction from '../../redux/actions/spAdmin/getUsers';

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

const SideBar = ({ getUsersAction, getUsers }) => {
  const [loadData, setLoadData] = useState(false);
  const [noData, setNoData] = useState(false);
  const [users, setUsers] = useState([]);
  const [startFetch, setStartFetch] = useState(true);

  useEffect(() => {
    if (startFetch) {
      getUsersAction();
      setStartFetch(false);
    }
    setLoadData(true);

    if (getUsers.status === 'success') {
      setLoadData(false);
      setUsers(getUsers.results);
    }
    if (getUsers.status === 'error') {
      const {
        error: { status },
      } = getUsers;
      if (status === 500) {
        setLoadData(false);
        setNoData(false);
      }
      if (status === 404) {
        setLoadData(false);
        setNoData(true);
      }
    }
  }, [getUsers]);

  return (
    <nav className="col-md-2 d-none d-md-block sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column dash-nav">
          <li className="nav-item">
            <h4 className="pl-3" style={{ color: '#9199a6' }}>
              <span className="mr-2 nav-icon">
                <FontAwesomeIcon icon={['fas', icon]} />
              </span>
              {message}
            </h4>
          </li>
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
            <NavLink
              className="nav-link"
              to="/users/view/"
              activeClassName="active"
            >
              <span className="mr-1">
                <FontAwesomeIcon icon={['fas', 'user-lock']} />
              </span>
              System Users
              <span className="badge badge-secondary ml-1">
                {loadData ? '-' : noData ? '0' : users.length}
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateFromProps = ({ getUsers }) => ({ getUsers });

export default connect(mapStateFromProps, { getUsersAction })(
  withRouter(SideBar)
);
