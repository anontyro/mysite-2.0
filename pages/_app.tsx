import React from 'react';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import wrapper, {makeStore} from '../store';
import {Store} from 'redux';

interface Props {
  store: Store;
}
class MyApp extends App<Props> {
  static async getInitialProps({Component, ctx}) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return {pageProps};
  }

  render() {
    const {Component, pageProps} = this.props;

    return <Component {...pageProps} />;
  }
}
const enhancedApp = wrapper.withRedux(MyApp);
export default enhancedApp;
