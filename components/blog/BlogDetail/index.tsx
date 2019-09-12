import React from 'react';
import BlogHeader from './components/BlogHeader';
import BlogDetailBody from './components/BlogDetailBody';
import {IGhostPost} from '../../../server/entity/GhostBlog';

interface Props {
  blogItem: IGhostPost;
}

const BlogDetail = ({blogItem}: Props) => {
  return (
    <React.Fragment>
      {/* <BlogHeader blogItem={blogItem} />
      <BlogDetailBody text={blogItem.body} /> */}
    </React.Fragment>
  );
};

export default BlogDetail;
