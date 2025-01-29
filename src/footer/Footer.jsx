import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="social-icons">
          <a
            href="https://www.facebook.com/people/Khalia-Howard/pfbid0PbYdbg5xGbdY38rLuC7x8RV283LWDJyK9DJDqpAkWY7W3YMGGEomScTm2JQ2FfDRl/"
            target="_blank"
            className="social-link"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/khaliahoward.m/"
            target="_blank"
            className="social-link"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/khaliahoward/"
            target="_blank"
            className="social-link"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://github.com/kkhhaalliiaa?tab=repositories"
            target="_blank"
            className="social-link"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
        <div className="copy">
          <p className="right">Swtkeys Copyright &copy;2024; Designed by Khalia Howard</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
