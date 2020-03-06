import React, {useEffect} from 'react';
import {withRouter, SingletonRouter} from 'next/router';
import {connect} from 'react-redux';
import * as actions from '../store/blog/actions';
import {UserState} from '../store/user/reducers';
import Layout from '../components/_Layout/Layout';
import IsLoading from '../components/util/IsLoading';
import BlogMainBody from '../components/blog/components/BlogMainBody';
import {getBlogList, doesBlogHaveNextPage} from '../store/blog/reducers';
import {IGhostPost} from '../server/entity/GhostBlog';
import {GHOST_BLOG_URL, ENV_LIST} from '../data/consts';
import {AppState} from '../store';

const NextBlogButton = ({getBlogList, hasNextPage}) => {
  if (!hasNextPage) {
    return null;
  }

  return (
    <React.Fragment>
      <div className="button-container">
        <a onClick={() => getBlogList()}>Get Next</a>
      </div>
      <style jsx>{`
        .button-container {
          margin: auto;
          display: flex;
          justify-content: center;
          padding: 10px 0;
        }
        a {
          background-color: #4196ea;
          border: 1px solid #4e6096;
          display: inline-block;
          cursor: pointer;
          color: #ffffff;
          font-family: Arial;
          font-size: 20px;
          padding: 5px 30px;
          text-decoration: none;
          text-shadow: -1px 1px 2px #283966;
        }
        a:hover {
          background-color: #4e6096;
        }
      `}</style>
    </React.Fragment>
  );
};

interface Props {
  getBlogList: (force?: Boolean) => void;
  getPost: (slug: string | string[]) => void;
  blogList: IGhostPost[];
  fetching: boolean;
  userSession: UserState;
  router: SingletonRouter;
  hasNextPage?: boolean;
  currentPost: IGhostPost;
}

const BLOG_TITLE = 'My blog';

const BlogPage = ({
  router,
  getBlogList,
  getPost,
  blogList,
  fetching,
  hasNextPage,
  currentPost,
}: Props) => {
  const env = process.env.NODE_ENV;
  if (env === ENV_LIST.PROD) {
    window.location.href = GHOST_BLOG_URL;
    return null;
  }
  const {post} = router.query;
  console.log(blogList);
  useEffect(() => {
    if (post) {
      getPost(post);
    }
    getBlogList();
  }, []);

  return (
    <Layout title={BLOG_TITLE}>
      <IsLoading isLoading={fetching}>
        <BlogMainBody
          blogList={blogList}
          slug={post}
          currentPost={currentPost}
        />
      </IsLoading>
      {!post && (
        <NextBlogButton hasNextPage={hasNextPage} getBlogList={getBlogList} />
      )}
    </Layout>
  );
};

const mapStateToProps = ({user, blog}: AppState) => ({
  blogList: getBlogList(blog),
  hasNextPage: doesBlogHaveNextPage(blog),
  currentPost: blog.currentPost,
  fetching: blog.fetching,
});

const mapDispatchToProps = (dispatch: any): any => ({
  getBlogList: (force = false): any => dispatch(actions.fetchBlogList(force)),
  getPost: (slug: string | string[]) => dispatch(actions.fetchBlogPost(slug)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BlogPage)
);
