import React from 'react';
import { render, screen } from '@testing-library/react';
import AppRouter from '../src/components/router/Router';
import { MemoryRouter } from 'react-router-dom';

describe('Routing', () => {
  it('renders Main component on root path', () => {
    render(
      <MemoryRouter initialEntries={['']}>
        <AppRouter />
      </MemoryRouter>
    );
    const mainElement = screen.getByTestId('home-page');
    expect(mainElement).toBeInTheDocument();
  });

  it('renders AboutUs component on /about path', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <AppRouter />
      </MemoryRouter>
    );
    const aboutUsElement = screen.getByTestId('about-page');
    expect(aboutUsElement).toBeInTheDocument();
  });

  it('renders Form component on /form path', () => {
    render(
      <MemoryRouter initialEntries={['/form']}>
        <AppRouter />
      </MemoryRouter>
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
