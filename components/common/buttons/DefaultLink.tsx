import React from 'react';
import css from 'styled-jsx/css';
import BaseLink from './BaseLink';
import {secondaryBlueColor} from '../../../data/typo';

const defaultStyle = css`
  a {
    background-color: ${secondaryBlueColor};
    display: inline-block;
    padding: 10px 20px;
    color: white;
    text-decoration: none;
    font-size: 20px;
    border: 1px solid #4e6096;
    text-shadow: -1px 1px 2px #283966;
    box-sizing: border-box;
    text-align: center;
  }
  a:hover {
    background-color: #3e454f;
  }

  @media only screen and (max-width: 800px) {
    a {
      width: 100%;
    }
  }
`;

interface Props {
  link: string;
  label: string;
}

const DefaultLink = ({link, label}: Props) => (
  <BaseLink link={{link, label}} style={defaultStyle} />
);

export default DefaultLink;
