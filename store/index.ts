import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {UserState, user, userInitialState} from './user/reducers';
import {BlogState, blog, blogInitialState} from './blog/reducers';
import thunk from 'redux-thunk';

export interface AppState {
  user: UserState;
  blog: BlogState;
}

export const initalState = {
  user: userInitialState,
  blog: blogInitialState,
};

const rootReducer = combineReducers({
  user,
  blog,
});

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const myStore = createStore(
  rootReducer,
  initalState,
  composeEnhancers(applyMiddleware(thunk))
);

export const makeStore = () => {
  return createStore(
    rootReducer,
    initalState,
    composeEnhancers(applyMiddleware(thunk))
  );
};

export default myStore;
