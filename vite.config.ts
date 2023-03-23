import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import type { InlineConfig } from 'vitest';
import type { UserConfig } from 'vite';

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
    css: true,
    coverage: {
      enabled: true,
      provider: 'c8',
      reporter: ['text'],
      all: true,
    },
  },
} as VitestConfigExport);
