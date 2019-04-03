import * as React from 'react';
import Meta from './Meta';
import dynamic from 'next/dynamic';

const Navbar = dynamic((() => import('./Navbar')) as any, {
  ssr: false,
});

type Props = {
  title?: string;
  displayImg?: boolean;
};

const Header: React.FunctionComponent<Props> = ({
  title,
  displayImg = false,
}) => (
  <React.Fragment>
    <Meta title={title} displayImg={displayImg} />
    <Navbar />
  </React.Fragment>
);

export default Header;
