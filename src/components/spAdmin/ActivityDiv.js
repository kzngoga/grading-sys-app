/* eslint-disable object-curly-newline */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ActivityDiv extends Component {
  render() {
    const {
      name,
      bgColor,
      borderColor,
      icon,
      iconHead,
      length,
      path,
    } = this.props;
    return (
      <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3 mt-5">
        <div className="dash-widget" style={{ borderTopColor: borderColor }}>
          <span className={`dash-widget-bg ${bgColor}`}>
            <FontAwesomeIcon icon={[iconHead, icon]} aria-hidden="true" />
          </span>
          <div className="dash-widget-info text-right">
            <h3>{length}</h3>
            <span className={`widget-title  ${bgColor}`}>
              <Link to={path} className="text-light">
                {name}
              </Link>
              <FontAwesomeIcon
                icon={['fas', 'check-circle']}
                aria-hidden="true"
                className="activity-icon"
              />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

ActivityDiv.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  iconHead: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
};
export default ActivityDiv;
