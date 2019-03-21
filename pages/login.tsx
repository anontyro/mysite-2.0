import * as React from 'react';
import {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {UserLogin, UserState} from '../store/user/reducers';
import * as actions from '../store/user/actions';
import LoginPage from '../components/auth/Login';
import LogoutPage from '../components/auth/Logout';
import Layout from '../components/Layout';
import Loader from '../components/Loader';
interface Props {
  loginUser: (userLogin: UserLogin) => void;
  userSession: UserState;
  logout: () => void;
}

const LOGIN_PAGE = 'Get in there';

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
    return (
      <Layout title={LOGIN_PAGE}>
        <Loader />
      </Layout>
    );
  }

  if (userSession.token.length !== 0) {
    return (
      <Layout title={LOGIN_PAGE}>
        <LogoutPage onLogout={onLogout} userSession={userSession} />
      </Layout>
    );
  } else {
    return (
      <Layout title={LOGIN_PAGE}>
        <LoginPage
          onLogin={onLogin}
          onEmailChange={onEmailChange}
          onPasswordChange={onPasswordChange}
        />
      </Layout>
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
