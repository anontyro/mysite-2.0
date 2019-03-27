import * as React from 'react';
import {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import Link from 'next/link';
import Head from 'next/head';
import {UserState} from '../../store/user/reducers';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons';

type Props = {
  userSession: UserState;
};

interface OverlayProps {
  isOverlayHidden: boolean;
  onNavigate: (overlay: boolean) => void;
}

const MobileNavOverlay = ({isOverlayHidden, onNavigate}: OverlayProps) => {
  const onNav = () => onNavigate(true);

  return (
    <React.Fragment>
      <div className={'overlayContainer'}>
        <h1 className={'brand'}>Alex Wilkinson</h1>
        <nav className={'nav-main full-shown'}>
          <Link href="/">
            <a className={'nav-link'}>Home</a>
          </Link>{' '}
          <Link href="/blog">
            <a className={'nav-link'}>Blog</a>
          </Link>{' '}
          <Link href="/portfolio">
            <a className={'nav-link'}>Portfolio</a>
          </Link>{' '}
          <Link href="/resume">
            <a className={'nav-link'}>Resume</a>
          </Link>{' '}
          <Link href="/about">
            <a className={'nav-link'}>About</a>
          </Link>{' '}
        </nav>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          flex-direction: column;
          padding: 25px;
          text-align: center;
          font-size: 25px;
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        }
        a {
          padding: 20px;
          text-decoration: none;
          color: #526d87;
        }
        a:hover {
          color: #4196ea;
        }
        .brand {
          font-size: 30px;
          font-family: 'Pacifico', cursive;
          line-height: 31px;
          color: #60b0ff;
          text-align: left;
          margin: auto;
          margin-top: 7px;
        }
        .overlayContainer {
          display: ${isOverlayHidden ? 'none' : 'block'};
          position: fixed;
          background-color: black;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          padding: 50px;
        }
      `}</style>
    </React.Fragment>
  );
};

const Layout: React.FunctionComponent<Props> = ({userSession}) => {
  const [isOverlayHidden, setIsOverlayHidden] = useState(true);

  const onClickMobileNav = () => {
    setIsOverlayHidden(!isOverlayHidden);
  };

  return (
    <React.Fragment>
      <header>
        <div className={'nav-container'}>
          <Link href="/">
            <a className={'brand'}>Alex Wilkinson</a>
          </Link>
          <nav className={'nav-main full-shown'}>
            <Link href="/blog">
              <a className={'nav-link'}>Blog</a>
            </Link>{' '}
            <Link href="/portfolio">
              <a className={'nav-link'}>Portfolio</a>
            </Link>{' '}
            <Link href="/resume">
              <a className={'nav-link'}>Resume</a>
            </Link>{' '}
            <Link href="/about">
              <a className={'nav-link'}>About</a>
            </Link>{' '}
          </nav>
        </div>
        <nav className={`nav-right full-shown`}>
          <Link href="/login">
            {userSession.email.length > 0 ? (
              <a className={'nav-link'}>Logout</a>
            ) : (
              <a className={'nav-link'}>Login</a>
            )}
          </Link>
        </nav>
        <div onClick={onClickMobileNav} className={'mobile-menu'}>
          <FontAwesomeIcon icon={isOverlayHidden ? faBars : faTimes} />
        </div>
      </header>
      <style jsx>{`
        header {
          display: flex;
          width: 100%;
          justify-content: space-between;
          margin: 50px 20px;
        }
        ,
        .brand {
          flex-grow: 0;
          padding-right: 15px;
          font-size: 30px;
          font-family: 'Pacifico', cursive;
          line-height: 31px;
        }
        ,
        .brand:hover {
          color: #60b0ff;
        }
        ,
        nav {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        ,
        .nav-main {
          flex-grow: 0;
        }
        ,
        .nav-right {
        }
        ,
        .nav-link {
          color: #526d87;
          font-size: 22px;
          text-decoration: none;
          flex-grow: 0;
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        }
        ,
        .nav-link:hover {
          color: #4196ea;
        }
        .mobile-menu {
          display: none;
          font-size: 30px;
          margin-right: 30px;
          z-index: 1000;
        }
        .mobile-menu:hover {
          color: #60b0ff;
          cursor: pointer;
        }
        @media only screen and (max-width: 700px) {
          nav.full-shown {
            display: none;
          }
          ,
          .mobile-menu {
            display: inherit;
          }
        }
      `}</style>
      <MobileNavOverlay
        isOverlayHidden={isOverlayHidden}
        onNavigate={setIsOverlayHidden}
      />
    </React.Fragment>
  );
};

const mapStateToProps = ({user}: any) => ({
  userSession: user,
});

const mapDispatchToProps = (dispatch: any): any => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
