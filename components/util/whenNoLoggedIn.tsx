import React, {ReactNode} from 'react';
import Router from 'next/router';
import IsLoggedIn from './IsLoggedIn';
import {ROUTES} from '../../data/consts';
import DefaultLink from '../common/buttons/DefaultLink';

const ToLogin = ({}) => {
  return (
    <React.Fragment>
      <h1>You are not logged in</h1>
      <DefaultLink link={ROUTES.LOGIN} label={'To Login'} />
    </React.Fragment>
  );
};

interface Props {
  children: ReactNode;
}

const WhenNotLoggedIn = ({children}: Props) => (
  <IsLoggedIn noneLoggedInView={ToLogin}>{children}</IsLoggedIn>
);

export default WhenNotLoggedIn;
