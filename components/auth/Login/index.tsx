import * as React from 'react';
import LoginForm from './components/LoginForm';

interface LoginPageProps {
  onLogin: (event: any) => void;
  onEmailChange: (event: any) => void;
  onPasswordChange: (event: any) => void;
}

const LoginPage = ({
  onLogin,
  onEmailChange,
  onPasswordChange,
}: LoginPageProps) => (
  <React.Fragment>
    <h3>Login</h3>
    <LoginForm
      onLogin={onLogin}
      onEmailChange={onEmailChange}
      onPasswordChange={onPasswordChange}
    />
  </React.Fragment>
);

export default LoginPage;
