import * as constants from './consts';
import {BlogState} from './reducers';

export interface SetBlogList {
  payload: BlogState;
  type: constants.GET_BLOG_LIST;
}

export interface SetBlogPost {
  payload: BlogState;
  type: constants.GET_BLOG_POST;
}

export interface CreateBlogPost {
  payload: BlogState;
  type: constants.CREATE_BLOG_POST;
}

type BlogActions = SetBlogList | SetBlogPost | CreateBlogPost;

export const addBlogList = (blog: BlogState): SetBlogList => {
  return {
    payload: {...blog},
    type: constants.GET_BLOG_LIST,
  };
};

export const addBlogPost = (blog: BlogState): SetBlogPost => {
  return {
    payload: {...blog},
    type: constants.GET_BLOG_POST,
  };
};

export const createBlogPost = (blog: BlogState): CreateBlogPost => {
  return {
    payload: {...blog},
    type: constants.CREATE_BLOG_POST,
  };
};

export default BlogActions;
