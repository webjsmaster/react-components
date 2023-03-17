import React, { FC } from 'react';
import scss from './Header.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { ABOUT_ROUTE, HOME_ROUTE } from '../../../../utils/consts';
import Input from './input/Input';
import logo from './../../../../image/logo-nodejs.png';

const Header: FC = () => {
  const location = useLocation();
  return (
    <div className={scss.wrapper}>
      <div className={scss.container}>
        <Link to={HOME_ROUTE} className={scss.logo}>
          <img src={logo} alt="logo" />
        </Link>
        <Input />
        <nav className={scss.menu}>
          <ul>
            <li className={location.pathname === HOME_ROUTE ? scss.loc : ''}>
              <Link to={HOME_ROUTE}>Home</Link>
            </li>
            <li className={location.pathname === ABOUT_ROUTE ? scss.loc : ''}>
              <Link to={ABOUT_ROUTE}>About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
