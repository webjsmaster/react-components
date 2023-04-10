import { describe, expect, it } from 'vitest';
import { Layout } from '../src/components/ui/layout/Layout';

describe('Cards list test', () => {
  it('should render homepage with cards list', () => {
    const host = document.createElement('div');
    document.body.appendChild(host);
    let children;
    const instance = Layout({ children });
    expect(instance).toBeTruthy();
  });
});
