import React from 'react';
import {Blog} from '../../../server/entity/MyBlog';
import BlogDetail from '../BlogDetail';
import BlogList from '../BlogList';
import {IGhostBlog, IGhostPost} from '../../../server/entity/GhostBlog';

interface BlogProps {
  blogList: IGhostPost[];
  slug: string | string[];
  currentPost: IGhostPost;
}

const BlogMainBody = ({
  blogList = null,
  slug = null,
  currentPost = null,
}: BlogProps) => {
  // const post = blogList.find((item: IGhostPost) => item.slug === slug);
  if (slug && currentPost) {
    return <BlogDetail blogItem={currentPost} />;
  }
  return <BlogList blogList={blogList} />;
};

export default BlogMainBody;
