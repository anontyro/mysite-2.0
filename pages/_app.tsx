import React from 'react';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import {Provider} from 'react-redux';
import myStore, {makeStore} from '../store';
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
    const {Component, pageProps, store} = this.props;

    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}
const enhancedApp = withRedux(makeStore)(MyApp);
export default enhancedApp;
