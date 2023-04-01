import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './style.css';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <div className="container">
        <section className="social-icons-wrapper d-flex flex-column flex-md-row justify-content-center my-3">
          {/* JOCELYN'S SECTION */}
          <div className="d-flex flex-column align-items-center mx-md-2 transparent-bg">
            <a href="https://github.com/jjocelynn" className="icon jjocelynn" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} flip size="3x" style={{ color: 'green' }} />
            </a>
            <a href="https://github.com/jjocelynn" target="_blank" rel="noreferrer">
              <span className="d-inline-block mx-1 name">@jjocelynn</span>
            </a>
          </div>
          {/* DAVES SECTION */}
          <div className="d-flex flex-column align-items-center mx-md-2 transparent-bg">
            <a href="https://github.com/devarsh2395" className="icon devarsh2395" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} beat size="3x" style={{ color: 'purple' }} />
            </a>
            <a href="https://github.com/devarsh2395" target="_blank" rel="noreferrer">
              <span className="d-inline-block mx-1 name">@devarsh2395</span>
            </a>
          </div>
          {/* THOMAS' SECTION */}
          <div className="d-flex flex-column align-items-center mx-md-2 transparent-bg">
            <a href="https://github.com/ThomasCalle" className="icon ThomasCalle" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} bounce size="3x" style={{ color: 'orange' }} />
            </a>
            <a href="https://github.com/ThomasCalle" target="_blank" rel="noreferrer">
            <span className="d-inline-block mx-1 name">@ThomasCalle</span>
            </a>
          </div>
        </section>
        <section className="footer" id="footer">
          <section className="form-footer">
            <h5 className="text-center mb-2">Designed with ⏳ by UTOR PRJ3 T8</h5>
            <p className="text-center mb-0">
              <h6>&copy; {new Date().getFullYear()} All rights reserved.</h6>
            </p>
          </section>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
