import * as React from 'react';
import * as actions from '../../../store/user/actions';
import {connect} from 'react-redux';
import css from 'styled-jsx/css';
import BaseLink, {LinkObject} from './BaseLink';

interface Props {
  logout: () => void;
  style: string;
}

const LogOut = ({logout, style = undefined}: Props) => {
  const onClick = (event: any) => {
    event.preventDefault();
    logout();
  };

  const link: LinkObject = {
    link: '#',
    label: 'Logout',
    onClick,
  };
  return <BaseLink link={link} style={style} />;
};

const mapStateToProps = ({user}: any) => ({});

const mapDispatchToProps = (dispatch: any): any => ({
  logout: () => dispatch(actions.logoutUser()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogOut);
