import * as React from 'react';
import {connect} from 'react-redux';
import Link from 'next/link';
import Head from 'next/head';
import Meta from './Meta';
import Navbar from './Navbar';
import Header from './Header';

type Props = {
  title?: string;
  displayImg?: boolean;
  showFooter?: boolean;
};

const Layout: React.FunctionComponent<Props> = ({
  title = 'alexwilkinson.co',
  displayImg = false,
  children,
  showFooter = true,
}) => (
  <React.Fragment>
    <Header title={title} displayImg={displayImg} />
    {children}
    {showFooter && (
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    )}
  </React.Fragment>
);

export default Layout;
