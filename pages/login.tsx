import * as React from 'react';
import {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {UserLogin, UserState, userInitialState} from '../store/user/reducers';
import * as actions from '../store/user/actions';
interface Props {
  loginUser: (userLogin: UserLogin) => void;
  userSession: UserState;
}

function Login({loginUser, userSession}: Props) {
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

  return (
    <React.Fragment>
      <h3>Login</h3>
      {userSession.fetchingData ? (
        <h3>LOADING...</h3>
      ) : (
        <form onSubmit={onLogin}>
          <input placeholder="email" onChange={onEmailChange} />
          <input
            placeholder="password"
            onChange={onPasswordChange}
            type="password"
          />
          <input type="submit" value="Login" />
        </form>
      )}
    </React.Fragment>
  );
}

const mapStateToProps = ({user}: any) => ({
  userSession: user,
});

const mapDispatchToProps = (dispatch: any): any => ({
  loginUser: (userLogin: UserLogin) => dispatch(actions.loginUser(userLogin)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
