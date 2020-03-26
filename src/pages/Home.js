import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Home extends Component {
  render() {
    return (
      <div className="bg-dark justify-content-center p-5 mt-5 mx-auto w-80">
        <h2 className="text-success text-center">
          Grading System App{' '}
          <span className="navbar-icon">
            <FontAwesomeIcon icon={['fas', 'bars']} />
          </span>
        </h2>
      </div>
    );
  }
}

export default Home;
