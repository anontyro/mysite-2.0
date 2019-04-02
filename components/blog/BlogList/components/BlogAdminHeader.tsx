import React from 'react';
import {Blog} from '../../../../server/entity/MyBlog';

interface Props {
  blogList: Blog[];
}

const BlogAdminHeader = ({blogList}: Props) => {
  return <h1>{`Blog List contains: ${blogList.length} items`}</h1>;
};

export default BlogAdminHeader;
