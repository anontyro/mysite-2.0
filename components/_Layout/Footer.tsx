import * as React from 'react';
import css from 'styled-jsx/css';
import packageJson from '../../package.json';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faLinkedin,
  faGithubSquare,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import {NavLink} from './navbar/Navbar';
import {ROUTES} from '../../data/consts';

const linkStyle = css`
  a {
    cursor: pointer;
    color: #526d87;
    font-size: 14px;
    text-decoration: none;
    flex-grow: 0;
    padding-right: 15px;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  a:hover {
    color: #4196ea;
  }
  .selected {
    cursor: default;
    color: #4196ea;
  }
`;

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
        <p>
          {`Version ${packageJson.version}`
          /* <NavLink
            link={ROUTES.CHANGELOG}
            label={`Version ${packageJson.version}`}
            style={linkStyle}
          /> */
          }
        </p>
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
          width: 36px;
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
