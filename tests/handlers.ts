import { rest } from 'msw';

export const handlers = [
  rest.get('https://dummyjson.com/products', (req, res, ctx) => {
    return res(
      ctx.status(304),
      ctx.json({
        total: 100,
        skip: 0,
        limit: 30,
        products: [
          {
            id: 1,
            title: 'iPhone 9',
            description: 'An apple mobile which is nothing like apple',
            price: 549,
            discountPercentage: 12.96,
            rating: 4.69,
            stock: 94,
            brand: 'Apple',
            category: 'smartphones',
            thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
            images: [
              'https://i.dummyjson.com/data/products/1/1.jpg',
              'https://i.dummyjson.com/data/products/1/2.jpg',
              'https://i.dummyjson.com/data/products/1/3.jpg',
              'https://i.dummyjson.com/data/products/1/4.jpg',
              'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
            ],
          },
        ],
      })
    );
  }),

  rest.get('https://dummyjson.com/products/1', (req, res, ctx) => {
    return res(
      ctx.status(304),
      ctx.json({
        total: 100,
        skip: 0,
        limit: 30,
        products: [
          {
            id: 1,
            title: 'iPhone 9',
            description: 'An apple mobile which is nothing like apple',
            price: 549,
            discountPercentage: 12.96,
            rating: 4.69,
            stock: 94,
            brand: 'Apple',
            category: 'smartphones',
            thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
            images: [
              'https://i.dummyjson.com/data/products/1/1.jpg',
              'https://i.dummyjson.com/data/products/1/2.jpg',
              'https://i.dummyjson.com/data/products/1/3.jpg',
              'https://i.dummyjson.com/data/products/1/4.jpg',
              'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
            ],
          },
        ],
      })
    );
  }),
];
