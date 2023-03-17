import React, { FC, PropsWithChildren } from 'react';
import Header from './header/Header';
import scss from './Layout.module.scss';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <div className={scss.container}>{children}</div>
    </>
  );
};

export default Layout;
