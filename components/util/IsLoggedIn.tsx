import React, {ReactNode} from 'react';
import {connect} from 'react-redux';
import {UserState} from '../../store/user/reducers';

interface Props {
  children: ReactNode;
  noneLoggedInView?: any;
  userSession: UserState;
}

const isUserLoggedIn = (userSession: UserState) => {
  return userSession.token.length > 0;
};

const IsLoggedIn = ({
  children,
  noneLoggedInView: Element = null,
  userSession,
  ...props
}: Props) => {
  const loggedIn = isUserLoggedIn(userSession);
  if (loggedIn) {
    return <React.Fragment>{children}</React.Fragment>;
  }
  if (Element) {
    return (
      <React.Fragment>
        <Element />
      </React.Fragment>
    );
  }
  return <React.Fragment />;
};

const mapStateToProps = ({user}: any) => ({
  userSession: user,
});

const mapDispatchToProps = (dispatch: any): any => ({});

const enhance = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default enhance(IsLoggedIn);
