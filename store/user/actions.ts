import * as constants from './consts';
import Router from 'next/router';
import {UserState, UserLogin} from './reducers';
import get from 'lodash.get';
import moment from 'moment';
import graphQLQuery from '../../components/graphQL/GraphQLWrapper';
import {LOGIN_QUERY} from '../../graphQL/queries/authQuery';
import {LOGIN_EXPIRY_SECONDS, ROUTES} from '../../data/consts';
export interface SetUser {
  payload: UserState;
  type: constants.SET_USER;
}

export interface RemoveUser {
  payload?: {};
  type: constants.REMOVE_USER;
}

export interface StartingLogin {
  type: constants.LOGGING_IN_USER;
}

export interface CompletedLogin {
  type: constants.COMPLETED_USER_LOGIN;
  payload: UserState;
}

export type UserActions = SetUser | RemoveUser | StartingLogin | CompletedLogin;

export const addUser = (user: UserState): SetUser => {
  return {
    payload: {...user},
    type: constants.SET_USER,
  };
};

export const removeUser = (): RemoveUser => {
  return {
    type: constants.REMOVE_USER,
  };
};

export const startingLogin = (): StartingLogin => ({
  type: constants.LOGGING_IN_USER,
});

export const completedLogin = (user: UserState): CompletedLogin => {
  return {
    type: constants.COMPLETED_USER_LOGIN,
    payload: {...user},
  };
};

export const logoutUser = () => {
  return (dispatch: any) => {
    Router.push('/');
    dispatch(removeUser());
  };
};

export const loginUser = (userLogin: UserLogin) => {
  return (dispatch: any) => {
    dispatch(startingLogin());

    return graphQLQuery({
      query: LOGIN_QUERY,
      variables: {email: userLogin.email, password: userLogin.password},
    }).subscribe({
      next: data => {
        const token = get(data, 'data.Login', null);
        const user: UserState = {
          email: userLogin.email,
          token,
          loginDate: moment().toDate(),
          loginExpiryDate: moment()
            .add(LOGIN_EXPIRY_SECONDS, 'seconds')
            .toDate(),
          isActive: true,
        };
        dispatch(completedLogin(user));
        Router.push(ROUTES.ADMIN);
      },
      error: error => {
        console.error(
          `An error occured whilst trying to log the user in:`,
          error
        );
      },
      complete: () => console.log('complete'),
    });
  };
};
