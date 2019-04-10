import React from 'react';
import {Blog} from '../../../../../../server/entity/MyBlog';
import {setAuthor} from '../../../../../../utils/blogUtil';
import {standardDate} from '../../../../../../utils/dateTimeUtil';

interface DateProps {
  published?: Date;
}

const BlogDate = ({published = null}: DateProps) => {
  if (published) {
    return (
      <React.Fragment>
        <p>{standardDate(published)}</p>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <p>Draft</p>
    </React.Fragment>
  );
};

interface Props {
  post: Blog;
}

const BlogPostHeader = ({post}: Props) => {
  return (
    <React.Fragment>
      <div className="postTitle">
        <h3>{post.title}</h3>
        <div className="postMeta">
          <BlogDate published={post.datePublished} />
          <p>{setAuthor(post.author)}</p>
        </div>
      </div>
      <style jsx>{`
        .postTitle {
        }
        .postMeta {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
      `}</style>
    </React.Fragment>
  );
};

export default BlogPostHeader;
