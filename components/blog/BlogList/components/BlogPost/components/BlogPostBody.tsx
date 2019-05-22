import React, {ReactNode} from 'react';
import {Blog} from '../../../../../../server/entity/MyBlog';
import {createBlurb} from '../../../../../../utils/stringUtil';

interface Props {
  post: Blog;
  children?: any;
}

const BlogPostBody = ({post, children}: Props) => {
  return (
    <React.Fragment>
      <div className="postBody">
        <p>{createBlurb(post.body)}</p>
        {children}
      </div>
      <style jsx>{`
        .postBody {
          width: 100%;
        }
        p {
          height: 80px;
        }
      `}</style>
    </React.Fragment>
  );
};

export default BlogPostBody;
