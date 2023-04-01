import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import CardFormBlock from '../src/components/ui/card-form-block/CardFormBlock';
import { ICardForm } from '../src/types/form.interface';
import { uuidv4 } from '../src/utils/uuid';

describe('InputTextElement', async () => {
  const cards: ICardForm[] = [
    {
      id: uuidv4(),
      firstText: 'firstText',
      secondText: 'secondText',
      img: 'file.png',
      date: '2023-03-30',
      select: 'green',
      checkbox: false,
      radio: 'second',
    },
  ];
  beforeEach(() => {
    render(<CardFormBlock cards={cards} />);
  });

  it('Renders CardFormBlock component', () => {
    const element = screen.getByText('firstText');
    expect(element).toBeInTheDocument();
  });
});
