import { api } from './api';
import { IProduct } from '../../types/store';

interface IQueryProducts {
  limit: number;
  skip: number;
  total: number;
  products: IProduct[];
}

export const productsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllProducts: build.query<IQueryProducts, { limit: number; skip: number }>({
      query: ({ limit, skip }) => ({
        url: '/',
        params: {
          limit,
          skip,
        },
      }),
    }),
    getOneProduct: build.query<IProduct, number>({
      query: (id: number) => ({
        url: `/${id}`,
      }),
    }),
  }),
});
