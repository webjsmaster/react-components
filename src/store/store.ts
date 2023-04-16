import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as cardReducer } from './reducers/AllSlice';
import { api } from './api/api';

const rootReducer = combineReducers({
  cardReducer,
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
