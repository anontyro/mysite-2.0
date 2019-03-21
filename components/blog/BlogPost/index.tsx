import React from 'react';
import {withRouter, SingletonRouter} from 'next/router';
import {connect} from 'react-redux';
import {Blog} from '../../../server/entity/MyBlog';

interface Props {
  blogItem?: Blog;
  slug: string | string[];
}

const BlogPost = ({blogItem, slug}: Props) => {
  return (
    <React.Fragment>
      <h1>{`Blog Page for: ${slug}`}</h1>
    </React.Fragment>
  );
};

export default BlogPost;
