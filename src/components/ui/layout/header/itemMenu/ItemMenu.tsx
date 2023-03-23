import React, { Component, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

interface IProps extends PropsWithChildren {
  route: string;
  className: string;
}

class ItemMenu extends Component<IProps> {
  constructor(props: IProps) {
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
