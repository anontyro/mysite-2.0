import * as React from 'react';
import Header from './Header';
import Footer from './Footer';

type Props = {
  title?: string;
  displayImg?: boolean;
  showFooter?: boolean;
};

const Layout: React.FunctionComponent<Props> = ({
  title,
  displayImg = false,
  children,
  showFooter = true,
}) => (
  <React.Fragment>
    <div className={'pageContainer'}>
      <Header title={title} displayImg={displayImg} />
      {children}
    </div>
    <style jsx>{`
      .pageContainer {
        flex: 1 0 auto;
      }
    `}</style>
    {showFooter && <Footer />}
  </React.Fragment>
);

export default Layout;
