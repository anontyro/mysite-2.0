import * as React from 'react';
import {useState} from 'react';
import {connect} from 'react-redux';
import {UserLogin, UserState} from '../store/user/reducers';
import * as actions from '../store/user/actions';
import Layout from '../components/_Layout/Layout';
import IsLoading from '../components/util/IsLoading';
import PageComponent from '../components/auth/Login/components/PageComponent';

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
    console.log(userLogin.email);
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

  return (
    <Layout title={LOGIN_PAGE}>
      <IsLoading isLoading={userSession.fetchingData}>
        <PageComponent
          userSession={userSession}
          onLogout={onLogout}
          onLogin={onLogin}
          onEmailChange={onEmailChange}
          onPasswordChange={onPasswordChange}
        />
      </IsLoading>
    </Layout>
  );
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
