import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

interface IProps extends PropsWithChildren {
  route: string;
  className: string;
}

function ItemMenu(props: IProps) {
  return (
    <li className={props.className}>
      <Link to={props.route}>{props.children}</Link>
    </li>
  );
}

export default ItemMenu;
