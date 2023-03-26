import { describe, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import InputForm from '../src/components/ui/input/InputForm';

describe('InputTextElement', () => {
  const ref = React.createRef<HTMLInputElement>();

  const onChangeInput = vi.fn();

  const validation = {
    text: true,
    date: true,
    file: false,
    select: true,
  };

  let input: HTMLInputElement;

  beforeEach(() => {
    render(<InputForm type="text" reference={ref} validation={validation} data-testid="input" />);
    input = screen.getByTestId('input');
  });

  it('Check input value', () => {
    expect(input.value).toBe('');
  });

  it('User change input', async () => {
    fireEvent.change(input, { target: { value: 'test' } });
    await expect(input.value).toBe('test');
  });
});
