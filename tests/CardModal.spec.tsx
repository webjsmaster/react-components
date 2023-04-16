import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardModal from '../src/components/ui/modal/CardModal/CardModal';
import { ICardModal } from '../src/components/ui/modal/Modal';

describe('Cards list test', () => {
  it('renders CardModal component', () => {
    const card: ICardModal = {
      id: 1,
      brand: 'test',
      description: 'test',
      category: 'test',
      discountPercentage: 1,
      images: ['test'],
      price: 1,
      rating: 1,
      stock: 1,
      thumbnail: 'test',
      title: 'test',
    };
    const setActive = vi.fn();

    render(<CardModal card={card} setActive={setActive} />);
    const mainElement = screen.getByTestId('card-modal');
    expect(mainElement).toBeInTheDocument();
  });
});
