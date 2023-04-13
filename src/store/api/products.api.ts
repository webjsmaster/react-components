import { api } from './api';

export const productsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: () => '/',
    }),
    getOneProduct: build.query({
      query: () => ({
        url: '/',
        params: {
          limit: 0,
          skip: 0,
        },
      }),
    }),
  }),
});
