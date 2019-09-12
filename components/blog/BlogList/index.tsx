import React from 'react';
import BlogAdminHeader from './components/BlogAdminHeader';
import IsLoggedIn from '../../util/IsLoggedIn';
import BlogListMap from './components/BlogListMap';
import {IGhostPost} from '../../../server/entity/GhostBlog';
import {standardDate} from '../../../utils/dateTimeUtil';
import {DEFAUlT_IMG} from '../../../data/consts';

interface ItemProps {
  post: IGhostPost;
}

const BlogItem = ({post}: ItemProps) => (
  <React.Fragment>
    <div className="postContainer">
      <div className="postHeader">
        <h3>{post.title}</h3>
        <p>{standardDate(post.published_at)}</p>
      </div>
      <div className="postImage" />
      <div className="postBody">{post.excerpt}</div>
    </div>
    <style jsx>{`
      .postHeader {
      }
      .postContainer {
        width: 45%;
        margin: 10px;
        height: 325px;
      }
      .postImage {
        width: 100%;
        height: 200px;
        position: relative;
        background-image: url(${post.feature_image}),
          url(/static/images/blog/${DEFAUlT_IMG});
        background-size: cover;
        background-repeat: no-repeat;
      }

      @media only screen and (max-width: 1000px) {
        .postImage {
          height: 20vw;
        }
      }

      @media only screen and (max-width: 800px) {
        .postContainer {
          width: 100%;
          height: unset;
        }
        .postImage {
          height: 30vw;
        }
      }
      @media only screen and (max-width: 500px) {
        .postImage {
          height: 40vw;
        }
      }
    `}</style>
  </React.Fragment>
);

interface Props {
  blogList: IGhostPost[];
}
const BlogList = ({blogList}: Props) => {
  console.log(blogList);
  return (
    <React.Fragment>
      <div className="blogList">
        {blogList.map((post: IGhostPost) => (
          <BlogItem post={post} />
        ))}
        ;
      </div>
      <style jsx>{`
        .blogList {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
      `}</style>
    </React.Fragment>
  );
};

export default BlogList;
