import React, { PropsWithChildren } from 'react';
import scss from './Layout.module.scss';
import { Header } from './header/Header';

export function Layout(props: PropsWithChildren) {
  return (
    <>
      <Header />
      <div className={scss.container}>{props.children}</div>
    </>
  );
}
