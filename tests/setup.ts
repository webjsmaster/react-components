import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';
import { server } from './server';
import { cleanup } from '@testing-library/react';

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => {
  server.resetHandlers();
  cleanup();
});

expect.extend(matchers);
