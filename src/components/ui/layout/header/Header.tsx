import React, { Component } from 'react';
import scss from './Header.module.scss';
import { Link } from 'react-router-dom';
import { ERROR_ROUTE, HOME_ROUTE } from '../../../../utils/consts';
import logo from './../../../../image/logo-nodejs.png';
import { Input } from './input/Input';
import { routes } from '../../../router/routes';
import ItemMenu from './itemMenu/ItemMenu';

export class Header extends Component {
  render() {
    const loc = document.location;
    return (
      <div className={scss.wrapper}>
        <div className={scss.container}>
          <Link to={HOME_ROUTE} className={scss.logo}>
            <img src={logo} alt="logo" />
          </Link>
          <Input />
          <nav className={scss.menu}>
            <ul>
              {routes
                .filter((r) => r.path != ERROR_ROUTE)
                .map((r) => (
                  <ItemMenu
                    key={r.path}
                    route={r.path}
                    className={loc.pathname === r.path ? scss.active : scss.def}
                  >
                    {r.name}
                  </ItemMenu>
                ))}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
