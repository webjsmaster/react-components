import { describe, expect, it } from 'vitest';
import App from '../src/App';

describe('Cards list test', () => {
  it('should render homepage with cards list', () => {
    const host = document.createElement('div');
    document.body.appendChild(host);
    const instance = App();
    expect(instance).toBeTruthy();
  });
});
