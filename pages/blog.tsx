import React from 'react';
import {withRouter, SingletonRouter} from 'next/router';
import {connect} from 'react-redux';
import * as actions from '../store/blog/actions';
import {Blog} from '../server/entity/MyBlog';
import {UserState} from '../store/user/reducers';
import BlogList from '../components/blog/BlogList';
import BlogPost from '../components/blog/BlogPost';
import Loader from '../components/Loader';
import Layout from '../components/Layout';

interface Props {
  getBlogList: (token?) => void;
  blogList: Blog[];
  fetching: boolean;
  userSession: UserState;
  router: SingletonRouter;
}

const BLOG_TITLE = '';

const BlogPage = ({
  userSession,
  router,
  getBlogList,
  blogList,
  fetching,
}: Props) => {
  const {post} = router.query;

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
        <BlogPost slug={post} />
      </Layout>
    );
  }

  return (
    <Layout title={BLOG_TITLE}>
      <BlogList />
    </Layout>
  );
};

const mapStateToProps = ({user, blog}: any) => ({
  userSession: user,
  blogList: blog.blogList,
  fetching: blog.fetching,
});

const mapDispatchToProps = (dispatch: any): any => ({
  getBlogList: (token): any => dispatch(actions.fetchBlogList(token)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(BlogPage)
);
