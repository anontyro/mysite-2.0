import * as React from 'react';
import {connect} from 'react-redux';
import {withRouter, SingletonRouter} from 'next/router';
import Layout from '../components/_Layout/Layout';
import * as actions from '../store/user/actions';
import IsLoggedIn from '../components/util/IsLoggedIn';
import {UserLogin, UserState} from '../store/user/reducers';
import LogoutPage from '../components/auth/Logout';

interface Props {
  userSession: UserState;
  logout: () => void;
  router: SingletonRouter;
}

const TITLE = 'Admin';

const AdminPage = ({logout, userSession, router}: Props) => {
  const {section} = router.query;
  const onLogout = (event: any) => {
    event.preventDefault();
    logout();
  };

  return (
    <Layout title={TITLE}>
      <h1>{`Admin Section: ${section}`}</h1>
      <IsLoggedIn>
        <LogoutPage onLogout={onLogout} userSession={userSession} />
      </IsLoggedIn>
    </Layout>
  );
};

const mapStateToProps = ({user}: any) => ({
  userSession: user,
});

const mapDispatchToProps = (dispatch: any): any => ({
  loginUser: (userLogin: UserLogin) => dispatch(actions.loginUser(userLogin)),
  logout: () => dispatch(actions.logoutUser()),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AdminPage)
);
