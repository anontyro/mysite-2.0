import React, {useEffect} from 'react';
import {withRouter, SingletonRouter} from 'next/router';
import {connect} from 'react-redux';
import * as actions from '../store/blog/actions';
import {Blog} from '../server/entity/MyBlog';
import {UserState} from '../store/user/reducers';
import Layout from '../components/_Layout/Layout';
import IsLoading from '../components/util/IsLoading';
import BlogMainBody from '../components/blog/components/BlogMainBody';
import {getBlogList} from '../store/blog/reducers';
import {IGhostBlog, IGhostPost} from '../server/entity/GhostBlog';

interface Props {
  getBlogList: (force?: Boolean) => void;
  blogList: IGhostPost[];
  fetching: boolean;
  userSession: UserState;
  router: SingletonRouter;
}

const BLOG_TITLE = 'My blog';

const BlogPage = ({router, getBlogList, blogList, fetching}: Props) => {
  const {post} = router.query;
  console.log(blogList);
  useEffect(() => {
    getBlogList();
  }, []);

  return (
    <Layout title={BLOG_TITLE}>
      <IsLoading isLoading={fetching}>
        <BlogMainBody blogList={blogList} slug={post} />
      </IsLoading>
      <a onClick={() => getBlogList()}>Get Next</a>
    </Layout>
  );
};

const mapStateToProps = ({user, blog}: any) => ({
  userSession: user,
  blogList: getBlogList(blog),
  fetching: blog.fetching,
});

const mapDispatchToProps = (dispatch: any): any => ({
  getBlogList: (force = false): any => dispatch(actions.fetchBlogList(force)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(BlogPage)
);
