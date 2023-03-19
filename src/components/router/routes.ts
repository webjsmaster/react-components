import { IRoute } from '../../types/routerType';
import { ABOUT_ROUTE, ERROR_ROUTE, HOME_ROUTE } from '../../utils/consts';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import ErrorPage from '../pages/error/ErrorPage';

export const routes: IRoute[] = [
  {
    path: HOME_ROUTE,
    Page: Home,
    name: 'Home',
  },
  {
    path: ABOUT_ROUTE,
    Page: About,
    name: 'About',
  },
  {
    path: ERROR_ROUTE,
    Page: ErrorPage,
  },
];
