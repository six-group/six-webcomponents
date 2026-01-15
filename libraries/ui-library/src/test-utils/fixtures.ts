import { test as base, E2EPageOptions } from '@stencil/playwright';
import v8toIstanbul from 'v8-to-istanbul';
import libCoverage from 'istanbul-lib-coverage';
import libReport from 'istanbul-lib-report';
import reports from 'istanbul-reports';
import * as fs from 'node:fs';
import * as path from 'node:path';

// Augment Stencil's E2EPageOptions to include our custom option
declare module '@stencil/playwright' {
  interface E2EPageOptions {
    /** When true, disables all CSS transition animations */
    disableAnimations?: boolean;
  }
}

// Coverage configuration
const REPORT_DIR = './coverage';

// Ensure the coverage directory exists
if (!fs.existsSync(REPORT_DIR)) {
  fs.mkdirSync(REPORT_DIR, { recursive: true });
}

/**
 * Extended test fixture that:
 * - Wraps setContent with CSS stylesheet injection
 * - Collects coverage for each test
 */
export const test = base.extend({
  page: async ({ page }, use, testInfo) => {
    // Override setContent to automatically inject CSS and support animation control
    const originalSetContent = page.setContent.bind(page);
    page.setContent = async (content: string, options?: E2EPageOptions) => {
      const { disableAnimations: shouldDisableAnimations, ...baseOptions } = options ?? {};
      return originalSetContent(htmlContainer(content, shouldDisableAnimations ?? true), baseOptions);
    };

    // Start coverage before test
    await page.coverage.startJSCoverage();

    // Run the test
    await use(page);

    // Stop coverage and collect data
    const coverage = await page.coverage.stopJSCoverage();
    const coverageMap = libCoverage.createCoverageMap({});

    for (const entry of coverage) {
      // Process all source files from build directory
      if (entry.url.includes('/build/') && entry.source != null) {
        // Skip Stencil runtime, internal modules, main bundle files, and SCSS
        if (
          entry.url.includes('index-') ||
          entry.url.includes('ui-library.esm.js') ||
          entry.url.includes('ui-library.js') ||
          entry.url.includes('index.esm.js') ||
          entry.url.includes('loader.esm.js') ||
          entry.url.includes('@stencil') ||
          entry.url.includes('node_modules') ||
          entry.url.includes('.scss')
        ) {
          continue;
        }
        const converter = v8toIstanbul('www/build/.', 0, { source: entry.source });
        await converter.load();
        converter.applyCoverage(entry.functions);
        coverageMap.merge(converter.toIstanbul());
      }
    }

    // Write coverage to temp file (unique per test)
    const fileName = `coverage-${testInfo.workerIndex}-${testInfo.testId}.json`;
    fs.writeFileSync(path.join(REPORT_DIR, fileName), JSON.stringify(coverageMap.toJSON(), null, 2));
  },
});

/**
 * Global teardown: merge all coverage files and generate HTML report.
 */
export function coverageTeardown() {
  if (!fs.existsSync(REPORT_DIR)) {
    console.log('No coverage data found');
    return;
  }

  const coverageMap = libCoverage.createCoverageMap({});

  // Read and merge all coverage files
  const files = fs.readdirSync(REPORT_DIR).filter((f) => f.endsWith('.json'));
  for (const file of files) {
    const filePath = path.join(REPORT_DIR, file);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    coverageMap.merge(data);
  }

  // Filter out unwanted files (Stencil internals, node_modules, SCSS)
  const filteredMap = libCoverage.createCoverageMap({});
  for (const file of coverageMap.files()) {
    if (file.includes('www/build/src/') && !file.includes('.scss')) {
      filteredMap.addFileCoverage(coverageMap.fileCoverageFor(file));
    }
  }

  if (filteredMap.files().length === 0) {
    console.log('No coverage data to report');
    return;
  }

  // Generate HTML report
  const context = libReport.createContext({
    dir: REPORT_DIR,
    coverageMap: filteredMap,
    sourceFinder: (filepath: string) => fs.readFileSync(filepath.replace('www/build/src/', 'src/'), 'utf8'),
  });

  reports.create('html').execute(context);
  reports.create('text-summary').execute(context);
  reports.create('cobertura').execute(context);

  console.log(`\nCoverage report generated at ${REPORT_DIR}/index.html`);

  // Clean up temp files
  for (const file of files) {
    fs.unlinkSync(path.join(REPORT_DIR, file));
  }
}

/**
 * Wraps the content in a html container with some margin for correct screenshot visibility and
 * adds the link to the library stylesheet.
 */
function htmlContainer(content: string, disableAnimations: boolean): string {
  const transitionSpeed = disableAnimations ? '0ms' : '200ms';

  return `
    <link rel="stylesheet" href="/build/ui-library.css" />
      <style>
        .playwright-test-container {
          padding: 6px;

          --six-transition-x-slow: ${transitionSpeed};
          --six-transition-slow:   ${transitionSpeed};
          --six-transition-medium: ${transitionSpeed};
          --six-transition-fast:   ${transitionSpeed};
          --six-transition-x-fast: ${transitionSpeed};
        }
      </style>
    <div class="playwright-test-container">
      ${content}
    </div>
`;
}
