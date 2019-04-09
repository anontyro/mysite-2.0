import React from 'react';
import {Blog} from '../../../../server/entity/MyBlog';
import {brandBlueColor, brandFont} from '../../../../data/typo';
import BlogDate, {BY_LINE_STYLE} from './BlogDate';

interface Props {
  blogItem: Blog;
}

const BlogHeader = ({blogItem}: Props) => {
  const defaultImg = 'default.png';
  const {title, coverImage, datePublished, dateCreated} = blogItem;
  const author = blogItem.author === 3 ? 'Alex' : 'Guest';
  return (
    <React.Fragment>
      <div className="blogHeader">
        <div className="blogTitle">
          <h1>{title}</h1>
          <div className="blogByLine">
            <span>{`By: ${author}`}</span>
            <BlogDate dateCreated={dateCreated} datePublished={datePublished} />
          </div>
        </div>
      </div>
      <style jsx>{`
        .blogHeader {
          width: 100%;
          height: 40vw;
          position: relative;
          background-image: url(/static/images/blog/${coverImage
              ? coverImage
              : defaultImg});
          background-size: cover;
          background-repeat: no-repeat;
        }
        .blogTitle {
          position: absolute;
          bottom: 10px;
          width: 100%;
          padding: 0 20px;
          box-sizing: border-box;
        }
        .blogByLine {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        .blogByLine * {
          ${BY_LINE_STYLE}
        }
        h1 {
          font-family: ${brandFont};
          color: ${brandBlueColor};
          margin: unset;
          margin-bottom: 10px;
          text-shadow: 3px 3px 3px black;
        }
      `}</style>
    </React.Fragment>
  );
};

export default BlogHeader;
