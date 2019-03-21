import * as React from 'react';

interface FormProps {
  onLogin: (event: any) => void;
  onEmailChange: (event: any) => void;
  onPasswordChange: (event: any) => void;
}

const LoginForm = ({onLogin, onEmailChange, onPasswordChange}: FormProps) => (
  <form onSubmit={onLogin}>
    <input placeholder="email" onChange={onEmailChange} />
    <input placeholder="password" onChange={onPasswordChange} type="password" />
    <input type="submit" value="Login" />
  </form>
);

export default LoginForm;
