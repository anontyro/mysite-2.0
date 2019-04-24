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
    <div className="loginContainer">
      <h3>Login</h3>
      <LoginForm
        onLogin={onLogin}
        onEmailChange={onEmailChange}
        onPasswordChange={onPasswordChange}
      />
    </div>
    <style jsx>{`
      h3 {
        text-align: center;
      }
      .loginContainer {
        width: 50%;
        margin: auto;
      }

      @media only screen and (max-width: 800px) {
        .loginContainer {
          width: 75%;
        }
      }

      @media only screen and (max-width: 600px) {
        .loginContainer {
          width: 100%;
        }
      }
    `}</style>
  </React.Fragment>
);

export default LoginPage;
