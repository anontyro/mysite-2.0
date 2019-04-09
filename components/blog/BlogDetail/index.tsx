import React from 'react';
import {Blog} from '../../../server/entity/MyBlog';
import BlogHeader from './components/BlogHeader';
import BlogDetailBody from './components/BlogDetailBody';

interface Props {
  blogItem: Blog;
}

const BlogDetail = ({blogItem}: Props) => {
  return (
    <React.Fragment>
      <BlogHeader blogItem={blogItem} />
      <BlogDetailBody text={blogItem.body} />
    </React.Fragment>
  );
};

export default BlogDetail;
