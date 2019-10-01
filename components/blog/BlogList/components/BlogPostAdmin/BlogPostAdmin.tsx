import React from 'react';
import {Blog} from '../../../../../server/entity/MyBlog';
import BlogPostHeader from '../BlogPost/components/BlogPostHeader';
import BlogPostBody from '../BlogPost/components/BlogPostBody';
import DefaultLink from '../../../../common/buttons/DefaultLink';
import {DEFAUlT_IMG} from '../../../../../data/consts';
// import PostControls from './components/PostControls';

interface Props {
  post: Blog;
}

const BlogPostAdmin = ({post}: Props) => {
  return (
    <React.Fragment>
      <div className="postContainer">
        <BlogPostHeader post={post} />
        <div className={'postContent'}>
          <div className={'postImage'} />
          <BlogPostBody post={post}>
            {/* <PostControls post={post} /> */}
          </BlogPostBody>
        </div>
      </div>
      <style jsx>{`
        .postContainer {
          width: 100%;
          margin: 10px;
          height: 250px;
        }
        .postContent {
          display: flex;
        }
        .postImage {
          margin-right: 25px;
          width: 25%;
          height: 160px;
          position: relative;
          background-image: url(/static/images/blog/${post.coverImage}),
            url(/static/images/blog/${DEFAUlT_IMG});
          background-size: cover;
          background-repeat: no-repeat;
          flex-shrink: 0;
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
};

export default BlogPostAdmin;
