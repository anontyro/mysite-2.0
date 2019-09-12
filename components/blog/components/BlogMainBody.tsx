import React from 'react';
import {Blog} from '../../../server/entity/MyBlog';
import BlogDetail from '../BlogDetail';
import BlogList from '../BlogList';
import {IGhostBlog, IGhostPost} from '../../../server/entity/GhostBlog';

interface BlogProps {
  blogList: IGhostPost[];
  slug: string | string[];
}

const BlogMainBody = ({blogList = null, slug = null}: BlogProps) => {
  // const post = blogItems.find((item: IGhostPost) => item.slug === slug);
  // if (slug && post) {
  //   return <BlogDetail blogItem={post} />;
  // }
  return <BlogList blogList={blogList} />;
};

export default BlogMainBody;
