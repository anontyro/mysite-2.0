import React from 'react';
import Link from 'next/link';
import {Blog} from '../../../../../../server/entity/MyBlog';
import {createBlurb} from '../../../../../../utils/stringUtil';

interface Props {
  post: Blog;
}

const BlogPostBody = ({post}: Props) => {
  return (
    <React.Fragment>
      <div className="postBody">
        <p>{createBlurb(post.body)}</p>
        <Link href={`/blog?post=${post.slug}`}>
          <a>Continue reading</a>
        </Link>
      </div>
      <style jsx>{``}</style>
    </React.Fragment>
  );
};

export default BlogPostBody;
