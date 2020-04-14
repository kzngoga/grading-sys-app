import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

const SideBar = () => (
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
            to="/admin/home"
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
            to="/admin/users/add"
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
            to="/admin/users/view"
            activeClassName="active"
          >
            <span className="mr-1">
              <FontAwesomeIcon icon={['fas', 'user-lock']} />
            </span>
            System Users
            <span className="badge badge-secondary ml-1">23</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/admin/teachers/add"
            activeClassName="active"
          >
            <span className="mr-1">
              <FontAwesomeIcon icon={['fas', 'user-edit']} />
            </span>
            Add Teacher
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/admin/teachers/view"
            activeClassName="active"
          >
            <span className="mr-1">
              <FontAwesomeIcon icon={['fas', 'chalkboard-teacher']} />
            </span>
            View Teachers
            <span className="badge badge-secondary ml-1">23</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/admin/students/add"
            activeClassName="active"
          >
            <span className="mr-1">
              <FontAwesomeIcon icon={['fas', 'user-edit']} />
            </span>
            Add Student
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/admin/students/view"
            activeClassName="active"
          >
            <span className="mr-1">
              <FontAwesomeIcon icon={['fas', 'user-graduate']} />
            </span>
            View Students
            <span className="badge badge-secondary ml-1">23</span>
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default SideBar;
