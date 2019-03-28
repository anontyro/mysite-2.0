import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import * as moment from 'moment';
import {UserState, user, userInitialState} from './user/reducers';
import {BlogState, blog, blogInitialState} from './blog/reducers';
import thunk from 'redux-thunk';
import throttle from 'lodash.throttle';
import {saveState, loadState} from '../utils/localStorage';
import {ResumeState, resume, resumeInitialState} from './resume/reducers';

export interface AppState {
  user: UserState;
  blog: BlogState;
  resume: ResumeState;
}

/*
Basic implementation of reading cached data to keep the User login details
whilst those details are still valid

This strategy can be expanded for caching user blog data whilst still writing to
persist even if the site loses connection or tab closed
*/
const getPersistState = () => {
  const state: AppState = loadState();

  if (state) {
    const dateDiff = moment().diff(state.user.loginExpiryDate);
    if (dateDiff < 0) {
      return state.user;
    }
  }
  return userInitialState;
};

export const initalState = {
  user: getPersistState(),
  blog: blogInitialState,
  resume: resumeInitialState,
};

const rootReducer = combineReducers({
  user,
  blog,
  resume,
});

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const myStore = createStore(
  rootReducer,
  initalState,
  composeEnhancers(applyMiddleware(thunk))
);

// method of saving persistant data to the store, can be expanded upon
// later to allow for more items to be saved in the store
myStore.subscribe(
  throttle(() => {
    saveState({
      user: myStore.getState().user,
    });
  }, 1000)
);

export const makeStore = () => {
  return createStore(
    rootReducer,
    initalState,
    composeEnhancers(applyMiddleware(thunk))
  );
};

export default myStore;
