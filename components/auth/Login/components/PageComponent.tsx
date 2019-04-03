import * as React from 'react';
import {UserState} from '../../../../store/user/reducers';
import LogoutPage from '../../Logout';
import LoginPage from '..';

interface PageProps {
  userSession: UserState;
  onLogout: (event: any) => void;
  onLogin: (event: any) => void;
  onEmailChange: (event: any) => void;
  onPasswordChange: (event: any) => void;
}

const PageComponent = ({
  userSession,
  onLogout,
  onLogin,
  onEmailChange,
  onPasswordChange,
}: PageProps) => {
  const {token} = userSession;
  if (token.length !== 0) {
    return <LogoutPage onLogout={onLogout} userSession={userSession} />;
  }
  return (
    <LoginPage
      onLogin={onLogin}
      onEmailChange={onEmailChange}
      onPasswordChange={onPasswordChange}
    />
  );
};

export default PageComponent;
