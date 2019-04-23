import * as React from 'react';
import {connect} from 'react-redux';
import Layout from '../components/_Layout/Layout';
import * as actions from '../store/user/actions';
import IsLoggedIn from '../components/util/IsLoggedIn';
import {UserLogin, UserState} from '../store/user/reducers';
import LogoutPage from '../components/auth/Logout';

interface Props {
  userSession: UserState;
  logout: () => void;
}

const AdminPage = ({logout, userSession}: Props) => {
  const onLogout = (event: any) => {
    event.preventDefault();
    logout();
  };

  return (
    <Layout title="Admin">
      <h1>Admin</h1>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPage);
