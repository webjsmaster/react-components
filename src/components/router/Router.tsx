import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import { IRoute } from '../../types/routerType';

class AppRouter extends Component {
  render() {
    return (
      <Routes>
        {routes.map(({ path, Page }: IRoute) => (
          <Route key={path} path={path} element={<Page />} />
        ))}
      </Routes>
    );
  }
}

export default AppRouter;
