import * as React from 'react';
import {connect} from 'react-redux';
import Link from 'next/link';
import Head from 'next/head';
import {UserState} from '../store/user/reducers';

type Props = {
  title?: string;
  userSession: UserState;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  userSession,
  title = 'This is the default title',
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/blog">
          <a>Blog</a>
        </Link>{' '}
        |{' '}
        <Link href="/list-fc">
          <a>List Example (as Functional Component)</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href="/login">
          {userSession.email.length > 0 ? <a>Logout</a> : <a>Login</a>}
        </Link>{' '}
        |{' '}
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

const mapStateToProps = ({user}: any) => ({
  userSession: user,
});

const mapDispatchToProps = (dispatch: any): any => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
