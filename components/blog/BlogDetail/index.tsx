import React from 'react';
import {Blog} from '../../../server/entity/MyBlog';

interface Props {
  blogItem: Blog;
}

const BlogDetail = ({blogItem}: Props) => {
  return (
    <React.Fragment>
      <h1>{`Blog Page for: ${blogItem.title}`}</h1>
      <p>{blogItem.body}</p>
    </React.Fragment>
  );
};

export default BlogDetail;
