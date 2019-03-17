import * as React from 'react';
import {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {UserLogin, UserState, userInitialState} from '../store/user/reducers';
import * as actions from '../store/user/actions';
interface Props {
  loginUser: (userLogin: UserLogin) => void;
  userSession: UserState;
  logout: () => void;
}

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

interface LogoutProps {
  userSession: UserState;
  onLogout: (event) => void;
}

const LogoutPage = ({userSession, onLogout}: LogoutProps) => (
  <React.Fragment>
    <h3>{`${userSession.email} Page`}</h3>
    <button onClick={onLogout}>Logout</button>
  </React.Fragment>
);

function Login({loginUser, userSession, logout}: Props) {
  const [userLogin, setUserLogin] = useState({email: '', password: ''});

  const onLogin = event => {
    event.preventDefault();
    console.log(userLogin);
    loginUser(userLogin);
  };

  const onEmailChange = event => {
    event.preventDefault();
    setUserLogin({
      ...userLogin,
      email: event.target.value,
    });
  };

  const onPasswordChange = event => {
    event.preventDefault();
    setUserLogin({
      ...userLogin,
      password: event.target.value,
    });
  };

  const onLogout = event => {
    event.preventDefault();
    logout();
  };

  if (userSession.fetchingData) {
    return <h3>LOADING...</h3>;
  }

  if (userSession.token.length !== 0) {
    return <LogoutPage onLogout={onLogout} userSession={userSession} />;
  } else {
    return (
      <LoginPage
        onLogin={onLogin}
        onEmailChange={onEmailChange}
        onPasswordChange={onPasswordChange}
      />
    );
  }
}

const mapStateToProps = ({user}: any) => ({
  userSession: user,
});

const mapDispatchToProps = (dispatch: any): any => ({
  loginUser: (userLogin: UserLogin) => dispatch(actions.loginUser(userLogin)),
  logout: () => dispatch(actions.removeUser()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
