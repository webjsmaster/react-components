import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import { IRoute } from '../../types/routerType';

function AppRouter() {
  return (
    <Routes>
      {routes.map(({ path, Page }: IRoute) => (
        <Route key={path} path={path} element={<Page />} />
      ))}
    </Routes>
  );
}

export default AppRouter;
