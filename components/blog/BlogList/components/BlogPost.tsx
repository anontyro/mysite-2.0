import React from 'react';
import {createBlurb} from '../../../../utils/stringUtil';
import {Blog} from '../../../../server/entity/MyBlog';

interface Props {
  post: Blog;
}

const BlogPost = ({post}: Props) => {
  return (
    <React.Fragment>
      <div className="postContainer">
        <div className="postTitle">
          <h3>{post.title}</h3>
          <div className="postMeta">
            <p>{post.datePublished}</p>
            <p>{post.author}</p>
          </div>
        </div>
        <div className="postImage" />
        <div className="postBody">
          <p>{createBlurb(post.body)}</p>
        </div>
      </div>
      <style jsx>{`
        .postContainer {
          width: 50%;
        }
      `}</style>
    </React.Fragment>
  );
};

export default BlogPost;
