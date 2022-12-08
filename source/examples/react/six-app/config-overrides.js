const { override, addWebpackPlugin } = require('customize-cra');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { removeModuleScopePlugin, babelInclude } = require('customize-cra');
const path = require('path');
const fs = require('fs').promises;
const { include } = require('./tsconfig.json');

// exports to fix
const webComponentsEnumDefinitions = {
  'node_modules/@six/ui-library/dist/types/components/six-table-header-cell': ['types'],
};

const copyWebComponentsEnumDefinitions = async () => {
  for (const [dir, files] of Object.entries(webComponentsEnumDefinitions)) {
    for (const file of files) {
      const enumDeclaration = await fs.readFile(path.resolve(dir, file + '.d.ts'));
      const updated = enumDeclaration.toString().replace(/declare /g, '');
      await fs.writeFile(path.resolve(dir, file + '.ts'), updated, { encoding: 'utf8', flag: 'w' });
    }
  }
};

// allow importing enum definitions from .ts files
copyWebComponentsEnumDefinitions().catch((err) => {
  console.error(err);
  process.exit(1);
});

module.exports = {
  webpack: override(
    addWebpackPlugin(
      new CopyWebpackPlugin({
        patterns: [
          { from: 'node_modules/@six/ui-library/dist/ui-library/assets', to: 'assets' },
          { from: 'node_modules/@six/ui-library/dist/ui-library/files', to: 'files' },
        ],
      })
    ),
    // allow to include styles from node_modules
    removeModuleScopePlugin(),
    babelInclude([
      // default config
      ...include.map((dir) => path.resolve(dir)),
      // allow importing enum definitions from .ts files
      ...Object.keys(webComponentsEnumDefinitions).map((dir) => path.resolve(dir)),
    ])
  ),
};
