import UserActions from './actions';
import * as constants from './consts';

export interface UserState {
  email: string;
  token: string;
  id: number;
  firstName: string;
  isActive: boolean;
}

export const userInitialState: UserState = {
  email: '',
  token: '',
  id: 0,
  firstName: '',
  isActive: false,
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
  }

  return state;
}
