import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICardForm } from '../../types/form.interface';

interface CardState {
  cards: ICardForm[];
  // product: IProduct | null;
  isLoading: boolean;
  error: string;
}

const initialState: CardState = {
  cards: [],
  isLoading: false,
  error: '',
};

export const productSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<ICardForm>) => {
      state.cards = [...state.cards, action.payload];
    },
  },
});

export const { reducer, actions } = productSlice;
