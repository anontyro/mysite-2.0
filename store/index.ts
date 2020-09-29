import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import moment from 'moment';
import {UserState, user, userInitialState} from './user/reducers';
import {BlogState, blog, blogInitialState} from './blog/reducers';
import thunk from 'redux-thunk';
import throttle from 'lodash.throttle';
import {saveState, loadState} from '../utils/localStorage';
import {ResumeState, resume, resumeInitialState} from './resume/reducers';
import {MakeStore, createWrapper, Context, HYDRATE} from 'next-redux-wrapper';
import {
  PortfolioState,
  portfolio,
  portfolioInitialState,
} from './portfolio/reducers';

require('dotenv').config();
const isDev = process.env.NODE_ENV !== 'production';

export interface AppState {
  user: UserState;
  blog: BlogState;
  resume: ResumeState;
  portfolio: PortfolioState;
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
  portfolio: portfolioInitialState,
};

const rootReducer = combineReducers({
  user,
  blog,
  resume,
  portfolio,
});

const myStore = createStore(
  rootReducer,
  initalState,
  composeWithDevTools(applyMiddleware(thunk))
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
    composeWithDevTools(applyMiddleware(thunk))
  );
};

const wrapper = createWrapper(makeStore, {debug: isDev});

export default wrapper;
