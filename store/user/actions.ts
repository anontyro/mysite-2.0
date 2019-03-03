import * as constants from './consts';
import {UserState} from './reducers';

export interface SetUser {
  payload: UserState;
  type: constants.SET_USER;
}

export interface RemoveUser {
  payload?: {};
  type: constants.REMOVE_USER;
}

type UserActions = SetUser | RemoveUser;

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

export default UserActions;
