import * as React from 'react';
import {connect} from 'react-redux';
import Link from 'next/link';
import Head from 'next/head';
import Meta from './Meta';
import Navbar from './Navbar';

type Props = {
  title?: string;
  displayImg?: boolean;
};

const Header: React.FunctionComponent<Props> = ({
  title = 'alexwilkinson.co',
  displayImg = false,
}) => (
  <React.Fragment>
    <Meta title={title} displayImg={displayImg} />
    <Navbar />
  </React.Fragment>
);

export default Header;
