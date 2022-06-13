import * as React from "react";
import css from "styled-jsx/css";
import packageJson from "../../package.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faLinkedin,
  faGithubSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "./navbar/Navbar";
import { ROUTES } from "../../data/consts";
import SocialLinks from "./navbar/SocialLinks";

const linkStyle = css`
  a {
    cursor: pointer;
    color: #526d87;
    font-size: 14px;
    text-decoration: none;
    flex-grow: 0;
    padding-right: 15px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
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
  window.open(url, "_blank");
};

const Footer = ({}) => {
  return (
    <React.Fragment>
      <footer>
        <SocialLinks />
        <p>{`All rights reserved Alex Wilkinson ${currentYear()} ©`}</p>
        <p>
          <NavLink
            link={ROUTES.CHANGELOG}
            label={`Version ${packageJson.version}`}
            style={linkStyle}
          />
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
