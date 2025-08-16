import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['src/**/*.test.ts'],
    environment: 'node',
    coverage: {
      reporter: ['text', 'json', 'html'],
      exclude: ['**/*.d.ts'],
    },
  },
});
