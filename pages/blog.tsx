import React, {useEffect} from 'react';
import {withRouter, SingletonRouter} from 'next/router';
import {connect} from 'react-redux';
import * as actions from '../store/blog/actions';
import {Blog} from '../server/entity/MyBlog';
import {UserState} from '../store/user/reducers';
import BlogList from '../components/blog/BlogList';
import Loader from '../components/Loader';
import Layout from '../components/_Layout/Layout';
import BlogDetail from '../components/blog/BlogDetail';

interface Props {
  getBlogList: (token?: String, force?: Boolean) => void;
  blogList: Blog[];
  fetching: boolean;
  userSession: UserState;
  router: SingletonRouter;
}

const BLOG_TITLE = 'My blog';

const BlogPage = ({
  userSession,
  router,
  getBlogList,
  blogList,
  fetching,
}: Props) => {
  const {post} = router.query;
  const {token} = userSession;

  useEffect(() => {
    getBlogList(token);
  }, []);

  if (fetching) {
    return (
      <Layout title={BLOG_TITLE}>
        <Loader />
      </Layout>
    );
  }

  if (post) {
    return (
      <Layout title={BLOG_TITLE}>
        <BlogDetail slug={post} />
      </Layout>
    );
  }

  return (
    <Layout title={BLOG_TITLE}>
      <BlogList blogList={blogList} />
    </Layout>
  );
};

const mapStateToProps = ({user, blog}: any) => ({
  userSession: user,
  blogList: blog.blogList,
  fetching: blog.fetching,
});

const mapDispatchToProps = (dispatch: any): any => ({
  getBlogList: (token, force = false): any =>
    dispatch(actions.fetchBlogList(token, force)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(BlogPage)
);
