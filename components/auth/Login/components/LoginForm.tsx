import * as React from 'react';

interface FormProps {
  onLogin: (event: any) => void;
  onEmailChange: (event: any) => void;
  onPasswordChange: (event: any) => void;
}

const LoginForm = ({onLogin, onEmailChange, onPasswordChange}: FormProps) => (
  <React.Fragment>
    <form onSubmit={onLogin}>
      <input
        className="formInput"
        placeholder="email"
        onChange={onEmailChange}
      />
      <input
        className="formInput"
        placeholder="password"
        onChange={onPasswordChange}
        type="password"
      />
      <input className="loginBtn" type="submit" value="Login" />
    </form>
    <style jsx>{`
      form {
        display: flex;
        flex-direction: column;
      }
      form * {
        margin: 0.5rem;
      }
      .formInput {
        font-size: 1.5rem;
      }
      .loginBtn {
        font-size: 1.5rem;
        background-color: #0e96f0;
        border: aliceblue;
        color: white;
        padding: 5px 0;
      }
    `}</style>
  </React.Fragment>
);

export default LoginForm;
