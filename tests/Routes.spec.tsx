import React from 'react';
import { render, screen } from '@testing-library/react';
import AppRouter from '../src/components/router/Router';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../src/store/store';
import { Provider } from 'react-redux';

describe('Routing', () => {
  it('renders Main component on root path', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['']}>
          <AppRouter />
        </MemoryRouter>
      </Provider>
    );
    const mainElement = screen.getByTestId('home-page');
    expect(mainElement).toBeInTheDocument();
  });

  it('renders AboutUs component on /about path', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/about']}>
          <AppRouter />
        </MemoryRouter>
      </Provider>
    );
    const aboutUsElement = screen.getByTestId('about-page');
    expect(aboutUsElement).toBeInTheDocument();
  });

  it('renders Form component on /form path', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/form']}>
          <AppRouter />
        </MemoryRouter>
      </Provider>
    );
    const aboutUsElement = screen.getByTestId('form-page');
    expect(aboutUsElement).toBeInTheDocument();
  });

  it('renders NotFound component on non-existing path', () => {
    render(
      <MemoryRouter initialEntries={['/sad']}>
        <AppRouter />
      </MemoryRouter>
    );
    const notFoundElement = screen.getByTestId('error-page');
    expect(notFoundElement).toBeInTheDocument();
  });
});
