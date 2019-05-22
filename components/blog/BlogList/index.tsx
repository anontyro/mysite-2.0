import React from 'react';
import {Blog} from '../../../server/entity/MyBlog';
import BlogAdminHeader from './components/BlogAdminHeader';
import IsLoggedIn from '../../util/IsLoggedIn';
import BlogListMap from './components/BlogListMap';

interface Props {
  blogList: Blog[];
}

const BlogList = ({blogList}: Props) => {
  return (
    <React.Fragment>
      <IsLoggedIn>
        <BlogAdminHeader blogList={blogList} />
      </IsLoggedIn>
      <BlogListMap blogList={blogList} />
    </React.Fragment>
  );
};

export default BlogList;
