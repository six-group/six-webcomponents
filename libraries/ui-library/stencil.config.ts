import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';
import { ComponentModelConfig, vueOutputTarget } from '@stencil/vue-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';

/**
 * Vue Component Models
 */
const vueComponentModels: ComponentModelConfig[] = [
  {
    elements: ['six-checkbox'],
    event: 'six-checkbox-change',
    targetAttr: 'checked',
  },
  {
    elements: ['six-datepicker'],
    event: 'six-datepicker-select',
    targetAttr: 'value',
  },
  {
    elements: ['six-input'],
    event: 'six-input-change',
    targetAttr: 'value',
  },
  {
    elements: ['six-radio'],
    event: 'six-radio-change',
    targetAttr: 'value',
  },
  {
    elements: ['six-range'],
    event: 'six-range-change',
    targetAttr: 'value',
  },
  {
    elements: ['six-search-field'],
    event: 'six-search-field-change',
    targetAttr: 'value',
  },
  {
    elements: ['six-select'],
    event: 'six-select-change',
    targetAttr: 'value',
  },
  {
    elements: ['six-switch'],
    event: 'six-switch-change',
    targetAttr: 'checked',
  },
  {
    elements: ['six-textarea'],
    event: 'six-textarea-change',
    targetAttr: 'value',
  },
];

export const config: Config = {
  namespace: 'ui-library',
  globalStyle: 'src/global/base.css',
  plugins: [
    sass({
      injectGlobalPaths: ['src/global/animation.scss'],
    }),
  ],
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: '@six-group/ui-library',
      proxiesFile: '../ui-library-react/src/components.ts',
      includeDefineCustomElements: true,
    }),
    vueOutputTarget({
      componentCorePackage: '@six-group/ui-library',
      proxiesFile: '../ui-library-vue/src/components.ts',
      componentModels: vueComponentModels,
      includeDefineCustomElements: true,
    }),
    angularOutputTarget({
      componentCorePackage: '@six-group/ui-library',
      directivesProxyFile: '../ui-library-angular/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../ui-library-angular/src/lib/stencil-generated/index.ts',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        { src: '../../../node_modules/material-icons/iconfont/material-icons*.*', dest: '.', warn: true },
        { src: '../../../node_modules/@fontsource/noto-sans/files/*', dest: './files', warn: true },
        { src: './assets/**/*', dest: '.', warn: true, keepDirStructure: true },
      ],
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'bundle',
    },
    {
      type: 'docs-readme',
      footer: 'Copyright © 2021-present SIX-Group',
    },
    {
      type: 'docs-json',
      file: './docs/components.json',
    },
    {
      type: 'docs-json',
      file: './dist/components.json',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        { src: '../../../node_modules/material-icons/iconfont/material-icons*.*', dest: 'build', warn: true },
        { src: '../../../node_modules/@fontsource/noto-sans/files/*', dest: 'build/files', warn: true },
        { src: '**/*.html' },
      ],
    },
  ],
  testing: {
    coverageThreshold: {
      global: {
        statements: 41,
        branches: 16,
        functions: 33,
        lines: 35,
      },
    },
    /**
     * Bamboo CI doesn't allow sandbox, therefore this parameters must be passed before testing
     */
    browserArgs: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-gpu',
      '--disable-dev-shm-usage',
      '--no-first-run',
      '--no-zygote',
      '--single-process',
      '--disable-extensions',
    ],
    // enable the following line when you want to use local chrome installation for e2e tests
    // you might also need to comment all browserArgs above to be able to run with local chrome
    // browserExecutablePath: 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',

    // you can debug a test with e.g. npm run test:debug components/six-dropdown/test/six-dropdown.e2e.ts
    // see readme for more info
    // enable the following 2 lines for better debugging e2e test experience
    // browserHeadless: false,
    // browserSlowMo: 1000,
  },
  devServer: {
    openBrowser: true,
  },
};
