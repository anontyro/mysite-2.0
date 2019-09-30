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

const externalLink = (url: string) => {
  window.open(url, '_blank');
};

const Footer = ({}) => {
  return (
    <React.Fragment>
      <footer>
        <div className="socials">
          <div
            onClick={() =>
              externalLink('https://www.facebook.com/AWILKINSON.SG')
            }
            className="socialIcon"
          >
            <FontAwesomeIcon icon={faFacebookSquare} />
          </div>
          <div
            onClick={() =>
              externalLink('https://www.linkedin.com/in/wilkinsonalexander')
            }
            className="socialIcon"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
          <div
            onClick={() => externalLink('https://github.com/anontyro')}
            className="socialIcon"
          >
            <FontAwesomeIcon icon={faGithubSquare} />
          </div>
          <div
            onClick={() => externalLink('https://twitter.com/alexwilkinson')}
            className="socialIcon"
          >
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
          cursor: pointer;
          font-size: 42px;
          margin: 0 2px;
        }
        .socialIcon:hover {
          color: #4196ea;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Footer;
