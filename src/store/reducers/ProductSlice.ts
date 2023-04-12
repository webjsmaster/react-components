import { IProduct } from '../../types/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductState {
  products: IProduct[];
  // product: IProduct | null;
  isLoading: boolean;
  error: string;
}

const initialState: ProductState = {
  products: [],
  // product: null,
  isLoading: false,
  error: '',
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<[IProduct]>) => {
      state.products = { ...action.payload };
    },
    // addProduct: (state, action: PayloadAction<IProduct>) => {
    //   state.product = action.payload;
    // },
  },
});

export const { reducer, actions } = productSlice;

// export default productSlice.reducer;
