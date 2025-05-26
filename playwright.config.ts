import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    video: 'on', // Record video for all tests
  },
  testDir: './tests', // Directory where your tests are located
});
