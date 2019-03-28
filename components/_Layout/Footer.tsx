import * as React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faLinkedin,
  faGithubSquare,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';

const Footer = ({}) => {
  return (
    <React.Fragment>
      <footer>
        <div>
          <FontAwesomeIcon icon={faFacebookSquare} />
        </div>
        <span>I'm here to stay (Footer)</span>
      </footer>
      <style jsx>{`
        footer {
          flex-shrink: 0;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Footer;
