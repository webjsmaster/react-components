import { describe } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import AppRouter from '../src/components/router/Router';
import { store } from '../src/store/store';
import { Provider } from 'react-redux';

describe('InputTextElement', () => {
  let inputElement: HTMLInputElement;
  let buttonElement: HTMLElement;

  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/form']}>
          <AppRouter />
        </MemoryRouter>
      </Provider>
    );
  });

  it('Check first-input element', () => {
    const formElement = screen.getByTestId('form-page');
    inputElement = formElement.querySelector('#firstText') as HTMLInputElement;
    expect(inputElement).toBeInTheDocument();
  });

  it('Check button element', () => {
    buttonElement = screen.getByText('Submit');
    expect(buttonElement).toBeInTheDocument();
  });

  it('User change input', async () => {
    fireEvent.change(inputElement, { target: { value: 'test' } });
    await expect(inputElement.value).toBe('test');
  });

  it('User change input error validation', async () => {
    const formElement = screen.getByTestId('form-page');
    inputElement = formElement.querySelector('#firstText') as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: 'оченьоченьмногобукв' } });
    buttonElement = await screen.getByText('Submit');
    fireEvent.click(buttonElement);
    const errorMessage = await screen.findByText('Max length 15 symbols');
    expect(errorMessage).toBeInTheDocument();
  });

  it('User change input file', async () => {
    const image = new File([''], 'picture.png', { type: 'image/png' });
    const input = screen.getByLabelText(/File/i);
    expect(input).toBeInTheDocument();
    fireEvent.change(input, image);
    buttonElement = await screen.getByText('Submit');
    fireEvent.click(buttonElement);
    const errorMessage = await screen.findByText('file is required field');
    expect(errorMessage).toBeInTheDocument();
  });
});
