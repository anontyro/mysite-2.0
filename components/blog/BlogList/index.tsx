import React from 'react';
import {withRouter, SingletonRouter} from 'next/router';
import {connect} from 'react-redux';
import {Blog} from '../../../server/entity/MyBlog';

interface Props {
  blogList?: Blog[];
}

const BlogList = ({blogList}: Props) => {
  return (
    <React.Fragment>
      <h1>Blog List</h1>
    </React.Fragment>
  );
};

export default BlogList;
