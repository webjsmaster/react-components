import { describe } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import AppRouter from '../src/components/router/Router';

describe('InputTextElement', () => {
  let inputElement: HTMLInputElement;
  let buttonElement: HTMLElement;

  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/form']}>
        <AppRouter />
      </MemoryRouter>
    );
  });

  it('Check input element', () => {
    const formElement = screen.getByTestId('form-page');
    inputElement = formElement.querySelector('#input') as HTMLInputElement;
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
    inputElement = formElement.querySelector('#input') as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: 'оченьоченьмногобукв' } });
    buttonElement = await screen.getByText('Submit');
    fireEvent.click(buttonElement);
    const errorMessage = await screen.findByText('The length > 1 and < 15');
    expect(errorMessage).toBeInTheDocument();
  });
});
