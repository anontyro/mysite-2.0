import * as React from 'react';
import Header from './Header';
import dynamic from 'next/dynamic';

const Footer = dynamic((() => import('./Footer')) as any, {
  ssr: false,
});

type Props = {
  title?: string;
  displayImg?: boolean;
  showFooter?: boolean;
  showNavBar?: boolean;
};

const Layout: React.FunctionComponent<Props> = ({
  title,
  displayImg = false,
  children,
  showFooter = true,
  showNavBar = true,
}) => (
  <React.Fragment>
    <div className={'pageContainer'}>
      <Header showNavBar={showNavBar} title={title} displayImg={displayImg} />
      {children}
    </div>
    <style jsx>{`
      .pageContainer {
        flex: 1 0 auto;
        min-height: calc(100vh - 200px);
        overflow-x: hidden;
      }
    `}</style>
    {showFooter && <Footer />}
  </React.Fragment>
);

export default Layout;
