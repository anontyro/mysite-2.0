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
  .selected {
    cursor: default;
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
  isSelected?: boolean;
  style?: string;
}

const BaseLink = ({link, isSelected, style = defaultStyle}: Props) => {
  return (
    <React.Fragment>
      <Link href={link.link ? link.link : ''}>
        <a className={isSelected ? 'selected' : ''} onClick={link.onClick}>
          {link.label}
        </a>
      </Link>
      <style jsx>{style}</style>
    </React.Fragment>
  );
};

export default BaseLink;
