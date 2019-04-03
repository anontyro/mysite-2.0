import * as React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faLinkedin,
  faGithubSquare,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';

const currentYear = () => {
  return new Date().getFullYear();
};

const Footer = ({}) => {
  return (
    <React.Fragment>
      <footer>
        <div className="socials">
          <div className="socialIcon">
            <FontAwesomeIcon icon={faFacebookSquare} />
          </div>
          <div className="socialIcon">
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
          <div className="socialIcon">
            <FontAwesomeIcon icon={faGithubSquare} />
          </div>
          <div className="socialIcon">
            <FontAwesomeIcon icon={faTwitterSquare} />
          </div>
        </div>
        <p>{`All rights reserved Alex Wilkinson ${currentYear()} ©`}</p>
        <p>{`Version 3.0`}</p>
      </footer>
      <style jsx>{`
        footer {
          flex-shrink: 0;
        }
        p {
          text-align: center;
          margin: 5px 0;
        }
        .socials {
          display: flex;
          justify-content: center;
        }
        .socialIcon {
          font-size: 42px;
          margin: 0 2px;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Footer;
