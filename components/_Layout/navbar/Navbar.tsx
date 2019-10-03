import * as React from 'react';
import {useState} from 'react';
import {connect} from 'react-redux';
import Link from 'next/link';
import {UserState} from '../../../store/user/reducers';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons';
import {brandDesign} from '../../../data/typo';
import {PAGE_LAYERS, GHOST_BLOG_URL} from '../../../data/consts';
import BaseLink from '../../common/buttons/BaseLink';
import MobileNavOverlay from './components/MobileNavOverlay';

interface NavLinkProps {
  link?: string;
  label: string;
  onClick?: () => void;
  style?: any;
}

export const NavLink = ({
  link,
  label,
  onClick = () => {},
  style = undefined,
}: NavLinkProps) => <BaseLink link={{link, label, onClick}} style={style} />;

interface AdminProps {
  isLoggedIn: boolean;
}

const AdminDisplay = ({isLoggedIn = false}: AdminProps) => {
  if (isLoggedIn) {
    return <NavLink label={'Admin'} link={'/admin?section=home'} />;
  }
  return <NavLink label={'Login'} link={'/login'} />;
};

type Props = {
  userSession: UserState;
};

const Layout: React.FunctionComponent<Props> = ({userSession}) => {
  const [isOverlayHidden, setIsOverlayHidden] = useState(true);
  const isUserLoggedIn = userSession.email.length > 0;
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
            <NavLink
              onClick={() => (window.location.href = GHOST_BLOG_URL)}
              label={'Blog'}
            />
            <NavLink link={'/portfolio'} label={'Portfolio'} />
            <NavLink link={'/resume'} label={'Resume'} />
            <NavLink link={'/about'} label={'About'} />
          </nav>
        </div>
        <nav className={`nav-right full-shown`}>
          {/* <AdminDisplay isLoggedIn={isUserLoggedIn} /> */}
        </nav>
        <div onClick={onClickMobileNav} className={'mobile-menu'}>
          <FontAwesomeIcon icon={isOverlayHidden ? faBars : faTimes} />
        </div>
      </header>
      <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
          margin: 50px 0;
        }
        .brand {
          flex-grow: 0;
          padding-right: 15px;
          ${brandDesign}
        }
        .brand:hover {
          color: #60b0ff;
        }
        nav {
          display: flex;
          justify-content: space-between;
          overflow-x: auto;
          overflow-y: hidden;
          margin-top: 5px;
        }
        .nav-container {
          display: flex;
          flex-direction: row;
        }
        .nav-main {
          flex-grow: 0;
        }
        .mobile-menu {
          display: none;
          font-size: 30px;
          margin-right: 30px;
          z-index: ${PAGE_LAYERS.TOP_VIEW};
        }
        .mobile-menu:hover {
          color: #60b0ff;
          cursor: pointer;
        }

        @media only screen and (max-width: 600px) {
          nav {
            width: 90%;
          }
          .nav-container {
            flex-direction: column;
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
