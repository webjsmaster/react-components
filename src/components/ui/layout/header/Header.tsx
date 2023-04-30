import React from 'react';
import scss from './Header.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { ERROR_ROUTE, HOME_ROUTE } from '../../../../utils/consts';
import logo from './../../../../image/logo-nodejs.png';
import { routes } from '../../../router/routes';
import ItemMenu from './itemMenu/ItemMenu';
import InputHeader from './input/InputHeader';

export function Header() {
  const { pathname } = useLocation();

  return (
    <div className={scss.wrapper}>
      <div className={scss.container}>
        <Link to={HOME_ROUTE} className={scss.logo}>
          <img src={logo} alt="logo" />
          LOGO
        </Link>
        <InputHeader />
        <nav className={scss.menu}>
          <ul>
            {routes
              .filter((r) => r.path != ERROR_ROUTE)
              .map((r) => (
                <ItemMenu
                  key={r.path}
                  route={r.path}
                  className={pathname === r.path ? scss.active : scss.def}
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
