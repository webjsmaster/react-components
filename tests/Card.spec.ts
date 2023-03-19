import { describe, expect, it } from 'vitest';
import Card from '../src/components/pages/home/card/Card';

const MOCK_DATA = {
  id: 6,
  name: 'Sixth',
  description: 'This is sixth card',
  poster: 'tsg',
  like: 22,
  view: 567,
};

describe('Cards list test', () => {
  it('should render card', () => {
    const host = document.createElement('div');
    document.body.appendChild(host);
    const instance = new Card(MOCK_DATA);
    expect(instance).toBeTruthy();
  });
});
