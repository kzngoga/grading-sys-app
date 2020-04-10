import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SideBar = () => (
  <nav className="col-md-2 d-none d-md-block sidebar">
    <div className="sidebar-sticky">
      <ul className="nav flex-column dash-nav">
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
