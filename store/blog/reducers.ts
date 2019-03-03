import BlogActions from './actions';
import * as constants from './consts';
import {Blog} from '../../server/entity/MyBlog';

export interface BlogState {
  blogList: Blog[];
  currentPost: Blog;
  newPost: Blog;
}

export const blogInitialState: BlogState = {
  blogList: [],
  currentPost: null,
  newPost: null,
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
