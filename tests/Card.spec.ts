import { describe, expect, it } from 'vitest';
import Card from '../src/components/pages/home/card/Card';

const MOCK_DATA: {
  id: number;
  name: string;
  description: string;
  poster: string;
  like: number;
  view: number;
} = {
  id: 6,
  name: 'Sixth',
  description: 'This is sixth card-form-block',
  poster: 'tsg',
  like: 22,
  view: 567,
};

describe('Cards list test', () => {
  it('should render card-form-block', () => {
    const host = document.createElement('div');
    document.body.appendChild(host);
    const instance = Card(MOCK_DATA);
    expect(instance).toBeTruthy();
  });
});
