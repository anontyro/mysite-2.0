import React from 'react';
import {Blog} from '../../../../../../server/entity/MyBlog';
import {setAuthor} from '../../../../../../utils/blogUtil';
import {standardDate} from '../../../../../../utils/dateTimeUtil';
import Hl from '../../../../../util/Hl';

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
        <Hl>
          <h3>{post.title}</h3>
        </Hl>
        <div className="postMeta">
          <BlogDate published={post.datePublished} />
          <p>{setAuthor(post.author)}</p>
        </div>
      </div>
      <style jsx>{`
        h3 {
          margin: unset;
        }
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
