import React from 'react';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import {Provider} from 'react-redux';
import myStore, {makeStore} from '../store';

class MyApp extends App {
  static async getInitialProps({Component, ctx}) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return {pageProps};
  }

  render() {
    const {Component, pageProps} = this.props;
    return (
      <Provider store={myStore}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}
const enhancedApp = withRedux(makeStore)(MyApp);
export default enhancedApp;
