import * as constants from './consts';
import {UserActions} from './actions';

export interface UserLogin {
  email: string;
  password: string;
}
export interface UserState {
  email?: string;
  token?: string;
  id?: number;
  firstName?: string;
  isActive?: boolean;
  loginDate?: Date;
  loginExpiryDate?: Date;
  fetchingData?: boolean;
}

export const userInitialState: UserState = {
  email: '',
  token: '',
  id: 0,
  firstName: '',
  isActive: false,
  fetchingData: false,
  loginDate: null,
  loginExpiryDate: null,
};

export function user(
  state: UserState = userInitialState,
  action: UserActions
): UserState {
  switch (action.type) {
    case constants.SET_USER:
      return {
        ...state,
        ...action.payload,
      };
    case constants.REMOVE_USER:
      return {
        ...userInitialState,
      };
    case constants.LOGGING_IN_USER:
      return {
        ...state,
        fetchingData: true,
      };
    case constants.COMPLETED_USER_LOGIN:
      return {
        ...action.payload,
        fetchingData: false,
      };
  }

  return state;
}
