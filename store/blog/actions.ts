import * as constants from './consts';
import {BlogState} from './reducers';
import graphQLQuery from '../../components/graphQL/GraphQLWrapper';
import {
  GHOST_BLOG_LIST_QUERY,
  GHOST_BLOG_ITEM_QUERY,
} from '../../graphQL/queries/blogQuery';
import get from 'lodash.get';
import GhostBlog, {
  IGhostBlogMeta,
  IGhostPost,
  GhostPost,
} from '../../server/entity/GhostBlog';
import {AppState} from '..';

export interface FetchingBlogPost {
  type: constants.GET_BLOG_POST;
}

export interface FetchedBlogPost {
  type: constants.FETCHED_BLOG_POST;
  payload: BlogState;
}

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

export type BlogActions =
  | SetBlogList
  | SetBlogPost
  | FetchingBlogList
  | FetchedBlogList
  | FetchingBlogPost
  | FetchedBlogPost;

export const fetchingBlogPost = (): FetchingBlogPost => ({
  type: constants.GET_BLOG_POST,
});

export const fetchedBlogPost = (blog: BlogState): FetchedBlogPost => ({
  type: constants.FETCHED_BLOG_POST,
  payload: {...blog},
});

export const fetchingBlogList = (): FetchingBlogList => ({
  type: constants.FETCHING_BLOG_LIST,
});

export const fetchedBlogList = (blog: BlogState): FetchedBlogList => {
  return {
    payload: {...blog},
    type: constants.FETCHED_BLOG_LIST,
  };
};

export const fetchBlogPost = slug => {
  return (dispatch: any) => {
    dispatch(fetchingBlogPost());

    return graphQLQuery({
      query: GHOST_BLOG_ITEM_QUERY,
      variables: {slug},
    }).subscribe({
      next: data => {
        const post: GhostPost = get(data, 'data.ghostPosts.posts[0]', {});
        const blog: BlogState = {
          currentPost: post,
        };
        console.log(data);
        dispatch(fetchedBlogPost(blog));
      },
      error: error => {
        console.error(`An error occured when trying to get a blog post`, error);
      },
      complete: () => console.log(`completed getting blog item ${slug}`),
    });
  };
};

export const fetchBlogList = (force = false) => {
  return (dispatch: any, getState: any) => {
    let page = 1;
    let limit = 4;
    const state: AppState = getState();
    const currentBlogList: IGhostPost[] = get(
      state,
      'blog.ghostBlogList.posts',
      []
    );
    const blogMeta: IGhostBlogMeta | null = get(
      state,
      'blog.ghostBlogList.meta',
      null
    );

    if (
      state.blog.ghostBlogList.posts.length &&
      state.blog.ghostBlogList.posts.length > 0 &&
      blogMeta &&
      blogMeta.pagination
    ) {
      if (blogMeta.pagination.next) {
        page = blogMeta.pagination.next;
      } else {
        return;
      }
    }

    dispatch(fetchingBlogList());

    return graphQLQuery({
      query: GHOST_BLOG_LIST_QUERY,
      variables: {page, limit},
    }).subscribe({
      next: data => {
        const ghostBlogList: GhostBlog = get(data, 'data.ghostPosts', []);
        const blog: BlogState = {
          ghostBlogList: {
            posts: [...currentBlogList, ...ghostBlogList.posts],
            meta: ghostBlogList.meta,
          },
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
