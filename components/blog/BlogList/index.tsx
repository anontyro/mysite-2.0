import React from 'react';
import {Blog} from '../../../server/entity/MyBlog';
import BlogPost from './components/BlogPost/BlogPost';
import BlogAdminHeader from './components/BlogAdminHeader';
import IsLoggedIn from '../../util/IsLoggedIn';

interface Props {
  blogList: Blog[];
}

const BlogList = ({blogList}: Props) => {
  return (
    <React.Fragment>
      <IsLoggedIn>
        <BlogAdminHeader blogList={blogList} />
      </IsLoggedIn>
      <div className="blogList">
        {blogList.map(post => (
          <BlogPost post={post} key={post.id} />
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
};

export default BlogList;
