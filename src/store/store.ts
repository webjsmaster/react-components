import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as productReducer } from './reducers/ProductSlice';

const rootReducer = combineReducers({
  productReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
