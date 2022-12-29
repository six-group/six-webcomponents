const { config } = require('./lib/config');
const { executeScript } = require('./lib/execute');
const { isBranch } = require('./lib/git');

const main = async () => {
  await executeScript(`
    npm ci
    cd ${config['@six-group/ui-library']} && npm run lint
    cd ${config['@six-group/ui-library']} && npm run test:inclCoverage
    npm run clean
    npm run build
    cd ${config.docs} && npm ci
    cd ${config.docs} && npm run build
    npm run publish
  `);

  // disabled e2e tests because currently there is an issue with puppeteer trying to launch firefox instead of chrome
  // reenable with:
  // cd ${config['@six-group/ui-library']} && npm run test:e2e

  if (await isBranch(['main'])) {
    await executeScript(`
      cd ${config.docs} && npm ci
      cd ${config.docs} && npm run build
    `);
  }
  // TODO build demo apps --> needs to be adjusted for Github
  if (await isBranch(['develop'])) {
    await executeScript(`
      cd ${config['angular-demo']} && npm ci
      cd ${config['angular-demo']} && npm run build
      cd ${config['react-demo']} && npm ci
      cd ${config['react-demo']} && npm run build
      cd ${config['vue-demo']} && npm ci
      cd ${config['vue-demo']} && npm run build
    `);
  }
};

main().catch(err => {
  console.log(err);
  process.exit(1);
});
