import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'https://dummyjson.com/products';

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['Products'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: () => ({}),
});
