import * as React from 'react';
import css from 'styled-jsx/css';
import {brandDesign} from '../../../../data/typo';
import {PAGE_LAYERS} from '../../../../data/consts';
import {NavLink} from '../Navbar';

const overlayStyle = css`
  a {
    padding: 20px;
    text-align: center;
    font-size: 25px;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    text-decoration: none;
    color: #526d87;
  }
  a:hover {
    color: #4196ea;
  }
`;

interface Props {
  isOverlayHidden: boolean;
  onNavigate: (overlay: boolean) => void;
}

const MobileNavOverlay = ({isOverlayHidden, onNavigate}: Props) => {
  const onNav = () => onNavigate(true);

  return (
    <React.Fragment>
      <div className={'overlayContainer'}>
        <h1 className={'brand'}>Alex Wilkinson</h1>
        <nav className={'nav-main full-shown'}>
          <NavLink link={'/'} label={'Home'} style={overlayStyle} />
          <NavLink
            link={'/blog'}
            label={'Blog'}
            onClick={onNav}
            style={overlayStyle}
          />
          <NavLink
            link={'/portfolio'}
            label={'Portfolio'}
            style={overlayStyle}
          />
          <NavLink link={'/resume'} label={'Resume'} style={overlayStyle} />
          <NavLink link={'/about'} label={'About'} style={overlayStyle} />
        </nav>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          flex-direction: column;
          padding: 25px;
        }
        .brand {
          ${brandDesign}
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
          z-index: ${PAGE_LAYERS.OVERLAY};
        }
      `}</style>
    </React.Fragment>
  );
};

export default MobileNavOverlay;
