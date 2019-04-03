import React from 'react';
import {Blog} from '../../../server/entity/MyBlog';
import BlogDetail from '../BlogDetail';
import BlogList from '../BlogList';

interface BlogProps {
  blogList: Blog[];
  slug: string | string[];
}

const BlogMainBody = ({blogList = [], slug = null}: BlogProps) => {
  const post = blogList.find((item: Blog) => item.slug === slug);
  if (slug && post) {
    return <BlogDetail blogItem={post} />;
  }
  return <BlogList blogList={blogList} />;
};

export default BlogMainBody;
