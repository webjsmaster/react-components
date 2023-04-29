import { Route, Routes } from 'react-router-dom';
import { IRoute } from '../../types/routerType';
import { routes } from './routes';

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
