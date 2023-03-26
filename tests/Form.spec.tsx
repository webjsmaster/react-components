// import { describe, it } from 'vitest';
// import { render, screen } from '@testing-library/react';
// import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import CardForm from '../src/components/ui/card-form/CardForm';
//
// describe('CardItem', () => {
//   const props = {
//     name: 'Test',
//     date: '25-03-2023',
//     image: 'https://klike.net/uploads/posts/2023-01/1674543731_3-86.jpg',
//     checkbox: false,
//     radio: true,
//     select: 'green',
//   };
//
//   it('Renders brand card', () => {
//     render(
//       <BrowserRouter>
//         <CardForm key={1} props={props} />
//       </BrowserRouter>
//     );
//     const brandElement = screen.getByRole('Form', { level: 3 });
//     expect(brandElement).toBeVisible();
//     expect(brandElement).toHaveTextContent('green');
//   });
//
//   it('Renders title card', () => {
//     render(
//       <BrowserRouter>
//         <CardForm key={1} props={props} />
//       </BrowserRouter>
//     );
//     const brandElement = screen.getByRole('heading', { level: 2 });
//     expect(brandElement).toBeVisible();
//     expect(brandElement).toHaveTextContent('25-03-2023');
//   });
//
//   it('Renders image card', () => {
//     render(
//       <BrowserRouter>
//         <CardForm key={1} props={props} />
//       </BrowserRouter>
//     );
//     const imageElement = screen.getByRole('img');
//     expect(imageElement).toBeVisible();
//     expect(imageElement).toHaveAttribute(
//       'src',
//       'https://klike.net/uploads/posts/2023-01/1674543731_3-86.jpg'
//     );
//   });
// });
