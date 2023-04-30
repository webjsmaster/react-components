import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { store } from '../src/store/store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import AppRouter from '../src/components/router/Router';

describe('Testing api', () => {
  beforeEach(() =>
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['']}>
          <AppRouter />
        </MemoryRouter>
      </Provider>
    )
  );

  // it('Fetch posts', async () => {
  //   expect(screen.getByText(/LOGO/i)).toBeDefined();
  //
  //   // fireEvent.click(screen.getByRole('button', { name: 'Fetch Posts' }));
  //
  //   // await waitForElementToBeRemoved(() => screen.queryByLabelText('LOGO'));
  //
  //   expect(await screen.getByRole('heading', { level: 3 })).toBeDefined();
  // });

  it('should render loading spinner', async () => {
    const loadingElement = screen.getByTestId('loading');
    expect(loadingElement).toBeInTheDocument();
    await waitFor(() => {
      expect(loadingElement).not.toBeInTheDocument();
    });
  });

  // it('should render card home page', async () => {
  //   await waitFor(() => {
  //     const loadingElement = screen.getByTestId('card-home-page');
  //     expect(loadingElement).toBeInTheDocument();
  //   });
  // });
});
