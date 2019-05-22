import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../store/blog/actions';
import {Blog} from '../../../server/entity/MyBlog';
import {UserState} from '../../../store/user/reducers';
import {BlogState} from '../../../store/blog/reducers';
import IsLoading from '../../util/IsLoading';
import BlogListMap from '../../blog/BlogList/components/BlogListMap';
import BlogPostAdmin from '../../blog/BlogList/components/BlogPostAdmin/BlogPostAdmin';

interface Props {
  getBlogList: (token?: String, force?: Boolean) => void;
  blogList: Blog[];
  blog: Blog;
  fetching: boolean;
  userSession: UserState;
}

interface MapState {
  user: UserState;
  blog: BlogState;
}

const AdminBlog = ({
  userSession,
  getBlogList,
  blogList,
  blog,
  fetching,
}: Props) => {
  const {token} = userSession;

  useEffect(() => {
    getBlogList(token, true);
  }, []);

  return (
    <React.Fragment>
      <h1>Admin Blog</h1>
      <IsLoading isLoading={fetching}>
        <BlogListMap blogList={blogList} post={BlogPostAdmin} />
      </IsLoading>
    </React.Fragment>
  );
};

const mapStateToProps = ({user, blog}: MapState) => ({
  userSession: user,
  blogList: blog.blogList,
  blog: blog.newPost,
  fetching: blog.fetching,
});

const mapDispatchToProps = (dispatch: any): any => ({
  getBlogList: (token, force = false): any =>
    dispatch(actions.fetchBlogList(token, force)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminBlog);
