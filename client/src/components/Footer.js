import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
// import './Footer.css';
// import React from 'react';
// import './assets/css/style.css';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <div className="container">
        <section className="social-icons-wrapper d-flex flex-column flex-md-row justify-content-center my-3">
          <div className="d-flex flex-column align-items-center mx-md-2">
            <a href="https://github.com/jjocelynn" className="icon jjocelynn" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} size="lg" style={{ color: 'white' }} />
            </a>
            <span>Jocelyn</span>
          </div>
          <div className="d-flex flex-column align-items-center mx-md-2">
            <a href="https://github.com/devarsh2395" className="icon devarsh2395" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} size="lg" style={{ color: 'white' }} />
            </a>
            <span>Devarsh</span>
          </div>
          <div className="d-flex flex-column align-items-center mx-md-2">
            <a href="https://github.com/ThomasCalle" className="icon ThomasCalle" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} size="lg" style={{ color: 'white' }} />
            </a>
            <span>Thomas</span>
          </div>
        </section>
        <section className="footer" id="footer">
          <section className="form-footer">
            {/* <h5 className="text-center mb-2">Designed with ⏳ by UTOR 23-Project-3 Team: 8</h5> */}
            <p className="text-center mb-0">
              <h6>&copy; 2023 All rights reserved.</h6>
            </p>
          </section>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
