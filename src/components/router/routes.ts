import { IRoute } from '../../types/routerType';
import { ABOUT_ROUTE, ERROR_ROUTE, FORM_ROUTE, HOME_ROUTE } from '../../utils/consts';
import { About, ErrorPage, FormPageContainer, Home } from '../pages';

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
  {
    path: FORM_ROUTE,
    Page: FormPageContainer,
    name: 'Form',
  },
];
