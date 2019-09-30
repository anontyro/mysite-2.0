import * as React from 'react';
import css from 'styled-jsx/css';
import Link from 'next/link';

const defaultStyle = css`
  a {
    cursor: pointer;
    color: #526d87;
    font-size: 22px;
    text-decoration: none;
    flex-grow: 0;
    padding-right: 15px;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  a:hover {
    color: #4196ea;
  }
`;

export interface LinkObject {
  link?: string;
  label: string;
  onClick?: (event: any) => void;
}

interface Props {
  link: LinkObject;
  style?: string;
}

const BaseLink = ({link, style = defaultStyle}: Props) => {
  return (
    <React.Fragment>
      <Link href={link.link ? link.link : ''}>
        <a onClick={link.onClick}>{link.label}</a>
      </Link>
      <style jsx>{style}</style>
    </React.Fragment>
  );
};

export default BaseLink;
