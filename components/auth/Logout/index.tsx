import * as React from 'react';
import {UserState} from '../../../store/user/reducers';

interface LogoutProps {
  userSession: UserState;
  onLogout: (event: any) => void;
}

const LogoutPage = ({userSession, onLogout}: LogoutProps) => (
  <React.Fragment>
    <h3>{`${userSession.email} Page`}</h3>
    <button onClick={onLogout}>Logout</button>
  </React.Fragment>
);

export default LogoutPage;
