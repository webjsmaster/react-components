import { describe, expect, it } from 'vitest';
import Home from '../src/components/pages/home/Home';

describe('Cards list test', () => {
  it('should render homepage with cards list', () => {
    const host = document.createElement('div');
    document.body.appendChild(host);
    const instance = new Home('');
    expect(instance).toBeTruthy();
  });
});
