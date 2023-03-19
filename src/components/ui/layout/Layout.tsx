import React, { Component, PropsWithChildren } from 'react';
import scss from './Layout.module.scss';
import { Header } from './header/Header';

export class Layout extends Component<PropsWithChildren> {
  constructor(props: PropsWithChildren) {
    super(props);
  }

  render() {
    return (
      <>
        <Header />
        <div className={scss.container}>{this.props.children}</div>
      </>
    );
  }
}
