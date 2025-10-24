import { expect } from '@playwright/test';
import { matchers, createConfig } from '@stencil/playwright';

// Add custom Stencil matchers to Playwright assertions
expect.extend(matchers);

export default createConfig({
  testDir: './src',
  testMatch: '**/*.e2e.ts',
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3333',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
  },

  webServer: {
    command: 'npm run start',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
