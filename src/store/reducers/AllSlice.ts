import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICardForm } from '../../types/form.interface';

interface CardState {
  cards: ICardForm[];
  // product: IProduct | null;
  isLoading: boolean;
  error: string;
  inputValue: string;
}

const initialState: CardState = {
  cards: [],
  isLoading: false,
  error: '',
  inputValue: '',
};

export const allSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<ICardForm>) => {
      state.cards = [...state.cards, action.payload];
    },
    handlerInput: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
  },
});

export const { reducer, actions } = allSlice;
