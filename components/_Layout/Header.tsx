import * as React from 'react';
import Meta from './Meta';
import dynamic from 'next/dynamic';

const Navbar = dynamic((() => import('./navbar/Navbar')) as any, {
  ssr: false,
});

type Props = {
  title?: string;
  displayImg?: boolean;
  showNavBar?: boolean;
};

const Header: React.FunctionComponent<Props> = ({
  title,
  displayImg = false,
  showNavBar = true,
}) => (
  <React.Fragment>
    <Meta title={title} displayImg={displayImg} />
    {showNavBar && <Navbar />}
  </React.Fragment>
);

export default Header;
