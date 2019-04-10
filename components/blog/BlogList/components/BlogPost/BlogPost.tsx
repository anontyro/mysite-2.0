import React from 'react';
import {Blog} from '../../../../../server/entity/MyBlog';
import BlogPostHeader from './components/BlogPostHeader';
import BlogPostBody from './components/BlogPostBody';

interface Props {
  post: Blog;
}

const BlogPost = ({post}: Props) => {
  return (
    <React.Fragment>
      <div className="postContainer">
        <BlogPostHeader post={post} />
        <div className="postImage" />
        <BlogPostBody post={post} />
      </div>
      <style jsx>{`
        .postContainer {
          width: 45%;
          margin: 10px;
          height: 350px;
        }
      `}</style>
    </React.Fragment>
  );
};

export default BlogPost;
