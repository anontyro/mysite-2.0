import React from 'react';
import {Blog} from '../../../../server/entity/MyBlog';
import BlogPost from './BlogPost/BlogPost';

interface Props {
  blogList: Blog[];
  post?: any;
}

const BlogListMap = ({blogList, post: Element = BlogPost}: Props) => (
  <React.Fragment>
    <div className="blogList">
      {blogList.map(post => (
        <Element post={post} key={post.id} />
      ))}
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

export default BlogListMap;
