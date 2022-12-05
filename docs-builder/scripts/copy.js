const path = require('path');
const fse = require('fs-extra');
const log = require('simple-node-logger').createSimpleLogger();

const UI_LIBRARY_PATH = path.join(__dirname, '../../source/packages/ui-library');

(async function main() {
  log.info('copy resources...');

  await fse.emptyDir(path.join(__dirname, '../src/.vuepress/lib/loader'));
  await fse.emptyDir(path.join(__dirname, '../src/.vuepress/lib/dist'));

  await fse.copy(
    path.join(UI_LIBRARY_PATH, '/dist'),
    path.join(__dirname, '../src/.vuepress/lib/dist'),
  );

  await fse.copy(
    path.join(UI_LIBRARY_PATH, '/loader'),
    path.join(__dirname, '../src/.vuepress/lib/loader'),
  );

  await fse.copy(
    path.join(`${UI_LIBRARY_PATH}/dist/ui-library/assets`),
    path.join(__dirname, '../src/.vuepress/public/components/assets'),
  );

  await fse.copy(
    path.join(UI_LIBRARY_PATH, '/CHANGELOG.md'),
    path.join(__dirname, '../src/CHANGELOG.md'),
  );

  log.info('Resources are copied');
}());
