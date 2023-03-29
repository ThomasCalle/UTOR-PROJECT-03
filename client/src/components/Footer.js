import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
// import './Footer.css';
// import React from 'react';
// import './assets/css/style.css';
const Footer = () => {
  return (
    <footer>
      <section className="social-icons-wrapper">
        <a href="https://github.com/jjocelynn" className="icon github" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon ={faGithub}/>
        </a>
        <a href="https://github.com/devarsh2395" className="icon youtube" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon ={faGithub}/>
        </a>
        <a href="https://github.com/ThomasCalle" className="icon twitter" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon ={faGithub}/>
        </a>
      </section>
      <section class="footer" id="footer">
              <section class="form-footer">
                <h5>Designed with ⏳ by jjocelynn, devarsh2395, ThomasCalle.</h5>
                <p>
                <h6>&copy; 2023 All rights reserved.</h6>
                </p>
      </section>
      </section>
    </footer>
  );
};

export default Footer;
