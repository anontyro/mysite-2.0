import React, {ReactNode} from 'react';
import Link from 'next/link';
import {Blog} from '../../../../../../server/entity/MyBlog';
import {createBlurb} from '../../../../../../utils/stringUtil';
import DefaultLink from '../../../../../common/buttons/DefaultLink';

interface Props {
  post: Blog;
}

const BlogPostBody = ({post}: Props) => {
  return (
    <React.Fragment>
      <div className="postBody">
        <p>{createBlurb(post.body)}</p>
        <DefaultLink
          link={`/blog?post=${post.slug}`}
          label={'Continue reading'}
        />
      </div>
      <style jsx>{`
        p {
          height: 80px;
        }
      `}</style>
    </React.Fragment>
  );
};

export default BlogPostBody;
