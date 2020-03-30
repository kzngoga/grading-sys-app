/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const date = new Date();
const Footer = ({ compt }) => (
  <>
    <footer className={compt === 'student' ? 'studentmt-5' : 'mt-5'}>
      <div className="container-fluid">
        <div className="other-links">
          <div className="row">
            <div className="col-md-6" />
            <div className="col-md-6">
              <div className="foot-divider" />
              <div className="copyright text-center">
                <div className="row">
                  <div className="col-12">
                    <p className="">
                      &copy; Grader {`${date.getFullYear()}`} - All Rights
                      Reserved.{' '}
                      <span className="develop">
                        Developed By{' '}
                        <a
                          href="https://www.nativerwanda.com/"
                          title="DAX TEAM"
                          target="_blank"
                        >
                          DAX TEAM
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <span className="follow mr-2">
                  <a
                    href="https://github.com/kzngoga/grading-sys-app"
                    title="GitHub"
                    target="_blank"
                    className="icon-link"
                  >
                    <span className="foot-icon mr-2 gh">
                      <FontAwesomeIcon icon={['fab', 'github']} />
                    </span>
                  </a>
                  <a
                    href="mailto:info.gsystem1@gmail.com"
                    title="info.gsystem1@gmail.com"
                    className="icon-link"
                    target="_blank"
                  >
                    <span className="foot-icon mr-2 em">
                      <FontAwesomeIcon icon={['fas', 'envelope']} />
                    </span>
                  </a>
                  <a
                    href="https://www.instagram.com/native_rwanda/"
                    title="Instagram"
                    className="icon-link"
                    target="_blank"
                  >
                    <span className="foot-icon mr-2 ig">
                      <FontAwesomeIcon icon={['fab', 'instagram']} />
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/nativerwanda"
                    title="Linked In"
                    className="icon-link"
                    target="_blank"
                  >
                    <span className="foot-icon mr-2 in">
                      <FontAwesomeIcon icon={['fab', 'linkedin']} />
                    </span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </>
);

Footer.propTypes = {
  compt: PropTypes.string.isRequired,
};

export default Footer;