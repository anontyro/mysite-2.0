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
      <h1 className="blog-header">{blogItem.title}</h1>
      <div
        className="blog-body"
        dangerouslySetInnerHTML={{__html: blogItem.html}}
      ></div>
      {/* <BlogHeader blogItem={blogItem} />
      <BlogDetailBody text={blogItem.body} /> */}
      <style jsx>{`
        .blog-header {
          text-align: center;
        }
        .blog-body {
          width: 90%;
          margin: 50px auto;
        }
      `}</style>
    </React.Fragment>
  );
};

export default BlogDetail;
