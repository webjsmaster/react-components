import React, { Component, PropsWithChildren } from 'react';
import scss from './Layout.module.scss';
import { HeaderCC } from './header/HeaderCC';

export class LayoutCC extends Component<PropsWithChildren> {
  constructor(props: PropsWithChildren) {
    super(props);
  }

  render() {
    return (
      <>
        <HeaderCC />
        <div className={scss.container}>{this.props.children}</div>
      </>
    );
  }
}
