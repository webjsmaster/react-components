import React from 'react';
import { render, screen } from '@testing-library/react';
import { store } from '../src/store/store';
import { Provider } from 'react-redux';
import Card, { ICardHome } from '../src/components/pages/home/card/Card';
import { vi } from 'vitest';

describe('Card Home render', () => {
  const card: ICardHome = {
    id: 1,
    title: 'Test',
    description: 'description',
    thumbnail: 'thumbnail',
    price: 1,
    rating: 1,
  };
  const showHandle = vi.fn();

  beforeEach(() =>
    render(
      <Provider store={store}>
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          description={card.description}
          thumbnail={card.thumbnail}
          price={card.price}
          rating={card.rating}
          showHandle={showHandle}
        />
      </Provider>
    )
  );

  it('Renders CardHome component', () => {
    const element = screen.getByTestId('card-home');
    expect(element).toBeInTheDocument();
  });
});
