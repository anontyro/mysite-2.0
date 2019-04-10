import React from 'react';
import {standardDate} from '../../../../utils/dateTimeUtil';

interface Props {
  datePublished: Date;
  dateCreated: Date;
}

export const BY_LINE_STYLE = `
  font-size: 1.4rem;
  text-shadow: 1px 1px 0px black;
`;

const BlogDate = ({dateCreated, datePublished}: Props) => {
  if (datePublished) {
    return (
      <React.Fragment>
        <span>{`Published: ${standardDate(datePublished)}`}</span>
        <style jsx>{`
          span {
            ${BY_LINE_STYLE}
          }
        `}</style>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <span>{`Created: ${standardDate(dateCreated)}`}</span>
      <style jsx>{`
        span {
          ${BY_LINE_STYLE}
        }
      `}</style>
    </React.Fragment>
  );
};

export default BlogDate;
