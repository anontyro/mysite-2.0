import * as constants from './consts';
import {BlogState, blog} from './reducers';
import graphQLQuery from '../../components/graphQL/GraphQLWrapper';
import {BLOG_LIST_QUERY} from '../../graphQL/queries/blogQuery';
import get from 'lodash.get';
import {Blog} from '../../server/entity/MyBlog';

export interface FetchingBlogList {
  type: constants.FETCHING_BLOG_LIST;
}

export interface FetchedBlogList {
  payload: BlogState;
  type: constants.FETCHED_BLOG_LIST;
}

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

export type BlogActions =
  | SetBlogList
  | SetBlogPost
  | CreateBlogPost
  | FetchingBlogList
  | FetchedBlogList;

export const addBlogList = (blog: BlogState): SetBlogList => {
  return {
    payload: {...blog},
    type: constants.GET_BLOG_LIST,
  };
};

export const fetchingBlogList = (): FetchingBlogList => ({
  type: constants.FETCHING_BLOG_LIST,
});

export const fetchedBlogList = (blog: BlogState): FetchedBlogList => {
  return {
    payload: {...blog},
    type: constants.FETCHED_BLOG_LIST,
  };
};

export const fetchBlogList = (token = '', force = false) => {
  return (dispatch: any, getState: any) => {
    const state = getState();
    if (state.blog.blogList.length > 0 && !force) {
      return;
    }
    dispatch(fetchingBlogList());

    return graphQLQuery({
      query: BLOG_LIST_QUERY,
      variables: {jwtToken: token},
    }).subscribe({
      next: data => {
        const blogList: Blog[] = get(data, 'data.blogList', []);
        const blog: BlogState = {
          blogList,
        };
        dispatch(fetchedBlogList(blog));
      },
      error: error => {
        console.error(`An error occured`, error);
      },
      complete: () => console.log('complete'),
    });
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
