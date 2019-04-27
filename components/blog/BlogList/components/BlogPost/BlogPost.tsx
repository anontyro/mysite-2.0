import React from 'react';
import {Blog} from '../../../../../server/entity/MyBlog';
import BlogPostHeader from './components/BlogPostHeader';
import BlogPostBody from './components/BlogPostBody';
import {DEFAUlT_IMG} from '../../../../../data/consts';
import DefaultLink from '../../../../common/buttons/DefaultLink';

interface Props {
  post: Blog;
}

const BlogPost = ({post}: Props) => {
  return (
    <React.Fragment>
      <div className="postContainer">
        <BlogPostHeader post={post} />
        <div className="postImage" />
        <BlogPostBody post={post}>
          <DefaultLink
            link={`/blog?post=${post.slug}`}
            label={'Continue reading'}
          />
        </BlogPostBody>
      </div>
      <style jsx>{`
        .postContainer {
          width: 45%;
          margin: 10px;
          height: 450px;
        }
        .postImage {
          width: 100%;
          height: 20vw;
          position: relative;
          background-image: url(/static/images/blog/${post.coverImage}),
            url(/static/images/blog/${DEFAUlT_IMG});
          background-size: cover;
          background-repeat: no-repeat;
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

export default BlogPost;
