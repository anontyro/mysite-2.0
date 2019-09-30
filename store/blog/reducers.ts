import * as constants from './consts';
import {Blog} from '../../server/entity/MyBlog';
import {
  IGhostBlogMeta,
  IGhostPost,
  GhostPost,
} from '../../server/entity/GhostBlog';
import {BlogActions} from './actions';

interface GhostBlog {
  posts: IGhostPost[];
  meta: IGhostBlogMeta;
}

export interface BlogState {
  blogList?: Blog[];
  ghostBlogList?: GhostBlog;
  currentPost?: GhostPost;
  newPost?: Blog;
  fetching?: boolean;
}

export const blogInitialState: BlogState = {
  blogList: [],
  ghostBlogList: {
    posts: [],
    meta: {
      pagination: {},
    },
  },
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
        fetching: true,
      };
    case constants.FETCHED_BLOG_POST:
      return {
        ...state,
        ...action.payload,
        fetching: false,
      };
    // case constants.RELEASE_BLOG_POST:
    // case constants.UPDATE_BLOG_POST:
    // case constants.REMOVE_BLOG_POST:
  }

  return state;
}

export const getBlogList = (blogState: BlogState) => {
  return [...blogState.ghostBlogList.posts];
};

export const doesBlogHaveNextPage = (blogState: BlogState): boolean => {
  const nextPage = blogState.ghostBlogList.meta.pagination.next;
  const currentPage = blogState.ghostBlogList.meta.pagination.page;
  if (nextPage && nextPage > currentPage) {
    return true;
  }
  return false;
};
