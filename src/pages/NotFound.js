/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable global-require */
import React, { useEffect } from 'react';
import '../styles/notFound.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const NotFound = () => {
  useEffect(() => {
    document.title = '404 Page Not Found! | Grader';
  });
  return (
    <>
      <div className="wrapper">
        <div className="header">
          <Link to="/" className="logo text-uppercase font-weight-bold">
            <span className="header-icon mr-1">
              <FontAwesomeIcon icon={['fas', 'book']} />
            </span>
            Grad
            <span className="fat">er</span>
          </Link>
        </div>

        <div className="indicators text-center">
          <div className="w3layouts-image text-center">
            <img src={require('../img/board.png')} alt="404, NOT FOUND" />
            <h2 className="header-w3ls">404</h2>
          </div>
          <h3 className="text-center mt-2">Sorry, Page Not Found! </h3>
        </div>
        <div className="home">
          <center>
            <Link className="btn-danger btn-not-found px-2" to="/">
              Take Me Home{' '}
              <span className="icon ml-2">
                <FontAwesomeIcon icon={['fas', 'home']} />
              </span>
            </Link>
          </center>
        </div>
      </div>
    </>
  );
};
export default NotFound;
