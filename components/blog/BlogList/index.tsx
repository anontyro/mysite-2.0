import React from "react";
import { withRouter, SingletonRouter } from "next/router";
import { connect } from "react-redux";
import { Blog } from "../../../server/entity/MyBlog";
import { createBlurb } from "../../../utils/stringUtil";

interface BlogProps {
  post: Blog;
}

const BlogPost = ({ post }: BlogProps) => {
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
        }
      `}</style>
    </React.Fragment>
  );
};

interface Props {
  blogList: Blog[];
}

const BlogList = ({ blogList }: Props) => {
  return (
    <React.Fragment>
      <h1>{`Blog List contains: ${blogList.length} items`}</h1>
      {blogList.map(post => (
        <BlogPost post={post} />
      ))}
    </React.Fragment>
  );
};

export default BlogList;
