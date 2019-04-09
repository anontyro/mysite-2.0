import React from 'react';

interface Props {
  text: string;
}

const BlogDetailBody = ({text}: Props) => {
  return (
    <React.Fragment>
      <div className="blogDetailBody">{text}</div>
      <style jsx>{`
        width: 90%;
        margin: 40px auto;
      `}</style>
    </React.Fragment>
  );
};

export default BlogDetailBody;
