import * as constants from './consts';
import {Blog} from '../../server/entity/MyBlog';
import {BlogActions} from './actions';

export interface BlogState {
  blogList?: Blog[];
  currentPost?: Blog;
  newPost?: Blog;
  fetching?: boolean;
}

export const blogInitialState: BlogState = {
  blogList: [],
  currentPost: null,
  newPost: null,
  fetching: false,
};

export function blog(
  state: BlogState = blogInitialState,
  action: BlogActions
): BlogState {
  switch (action.type) {
    case constants.GET_BLOG_LIST:
      return {
        ...state,
        ...action.payload.blogList,
      };
    case constants.FETCHING_BLOG_LIST:
      return {
        ...state,
        fetching: true,
      };
    case constants.FETCHED_BLOG_LIST:
      return {
        ...state,
        ...action.payload,
        fetching: false,
      };
    case constants.GET_BLOG_POST:
      return {
        ...state,
        ...action.payload.currentPost,
      };
    case constants.CREATE_BLOG_POST:
      return {
        ...state,
        ...action.payload,
      };
    // case constants.RELEASE_BLOG_POST:
    // case constants.UPDATE_BLOG_POST:
    // case constants.REMOVE_BLOG_POST:
  }

  return state;
}
