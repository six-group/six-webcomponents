import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';

const componentCorePackage = '@six-group/ui-library';

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
    angularOutputTarget({
      componentCorePackage: componentCorePackage,
      directivesProxyFile: '../ui-library-angular/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../ui-library-angular/src/lib/stencil-generated/index.ts',
    }),
    vueOutputTarget({
      componentCorePackage: componentCorePackage,
      proxiesFile: '../ui-library-vue/src/lib/stencil-generated/components.ts',
      componentModels: [
        {
          elements: ['six-checkbox', 'six-switch'],
          event: 'change',
          targetAttr: 'checked',
        },
        {
          elements: ['six-input', 'six-textarea', 'six-range'],
          event: 'input',
          targetAttr: 'value',
        },
        {
          elements: ['six-select', 'six-datepicker'],
          event: 'change',
          targetAttr: 'value',
        },
      ],
    }),
    reactOutputTarget({
      outDir: '../ui-library-react/src',
      /*      componentCorePackage,
      includeImportCustomElements: true,
      includePolyfills: false,
      includeDefineCustomElements: false,
      // Relative path to where the React components will be generated
      proxiesFile: '../ui-library-react/src/lib/components/stencil-generated/index.ts',
      excludeComponents: [],*/
    }),
    reactOutputTarget({
      outDir: '../ui-library-react/src/ssr',
      hydrateModule: '@six-group/ui-library/hydrate',
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
      externalRuntime: false,
    },
    {
      type: 'dist-hydrate-script',
      dir: './hydrate',
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
  devServer: {
    openBrowser: true,
  },
};
