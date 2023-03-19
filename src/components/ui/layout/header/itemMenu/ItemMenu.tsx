import React, { Component, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

interface Props extends PropsWithChildren {
  route: string;
  className: string;
}

class ItemMenu extends Component<Props> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <li className={this.props.className}>
        <Link to={this.props.route}>{this.props.children}</Link>
      </li>
    );
  }
}

export default ItemMenu;
