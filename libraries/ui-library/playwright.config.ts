import { expect } from '@playwright/test';
import { matchers, createConfig } from '@stencil/playwright';

expect.extend(matchers);

export default createConfig({
  testMatch: '**/*.e2e.ts',
  fullyParallel: true,
  globalTeardown: './src/test-utils/coverage-teardown.ts',

  forbidOnly: !!process.env.CI,
  reporter: process.env.CI ? [['html', { open: 'never' }], ['github']] : [['html', { open: 'never' }], ['line']],
  timeout: 20000,
  workers: 2,

  // Use same screenshots across all operating systems (no {platform} token)
  snapshotPathTemplate: '{testDir}/{testFileDir}/{testFileName}-snapshots/{arg}{ext}',

  expect: {
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.04,
    },
  },

  use: {
    // 400px width is wide enough for popup panels (date picker, dropdown, etc.)
    viewport: { width: 400, height: 640 },
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
    launchOptions: {
      args: ['--disable-gpu'],
    },
  },

  webServer: {
    // Use npx to ensure stencil is found when running from IDEs (e.g., IntelliJ)
    // Workaround for: https://github.com/stenciljs/playwright/blob/main/src/create-config.ts#L41
    command: 'npx stencil build --dev --watch --serve --no-open',
  },
});
