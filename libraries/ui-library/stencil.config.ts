import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'ui-library',
  globalStyle: 'src/global/base.css',
  plugins: [
    sass({
      injectGlobalPaths: ['src/global/animation.scss'],
    }),
  ],
  extras: {
    // fixes VitePress doc build
    enableImportInjection: true,
  },
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: '@six-group/ui-library',
      proxiesFile: '../ui-library-react/src/lib/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
    angularOutputTarget({
      componentCorePackage: '@six-group/ui-library',
      directivesProxyFile: '../ui-library-angular/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../ui-library-angular/src/lib/stencil-generated/index.ts',
    }),
    vueOutputTarget({
      componentCorePackage: '@six-group/ui-library',
      proxiesFile: '../ui-library-vue/src/lib/stencil-generated/components.ts',
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
