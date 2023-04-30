import { Request, Response } from 'express';
import { renderToPipeableStream } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';

import { store } from '../store/store';
import Html from './Html';
import AppRouter from '../components/router/Router';

interface AssetMap {
  style?: string;
  script: string;
}

async function render(req: Request, res: Response, assetMap: AssetMap) {
  const preloadedState = store.getState();
  let didError = false;

  const { pipe } = renderToPipeableStream(
    <Html style={assetMap.style} preloadedState={preloadedState}>
      <Provider store={store}>
        <StaticRouter location={req.originalUrl}>
          <AppRouter />
        </StaticRouter>
      </Provider>
    </Html>,
    {
      onShellReady() {
        res.statusCode = didError ? 500 : 200;
        res.setHeader('content-type', 'text/html');
        pipe(res);
      },
      onShellError() {
        res.statusCode = 500;
        res.setHeader('content-type', 'text/html');
        res.send('<h1>Something went wrong</h1>');
      },
      onError(err: unknown) {
        didError = true;
        console.error(err);
      },
      bootstrapModules: [assetMap.script],
    }
  );
}

export { render };
