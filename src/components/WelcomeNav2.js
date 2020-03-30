/* eslint-disable no-nested-ternary */
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WelcomeNav2 = () => (
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
          <li className="nav-item">
            <Link className="nav-link mr-3" to="/">
              <span className="mr-2 nav-icon">
                <FontAwesomeIcon icon={['fas', 'home']} />
              </span>
              Go to Home
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default WelcomeNav2;
