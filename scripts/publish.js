const { getPublishedVersions } = require('./lib/registry-check');
const { config } = require('./lib/config');
const { executeCommand } = require('./lib/execute');
const { executeScript } = require('./lib/execute');
const { tag } = require('./lib/git');
const { getPackageVersion, updatePackage } = require('./lib/package');

const defaultPublishPackageOptions = {
  preprocess: async () => {},
};

const publishPackage = async (version, package, { preprocess } = defaultPublishPackageOptions) => {
  const versions = await getPublishedVersions(package);

  if (versions.includes(version)) {
    console.log(`Version ${version} of ${package} is already published.`);
    // nothing to publish
    return;
  }

  console.log(`New version ${version} of ${package} is available to publish.`);

  await executeCommand('echo "//registry.npmjs.org/:_authToken=${NPM_PUBLISH_TOKEN}" >> ~/.npmrc');
  await executeCommand('echo "always-auth=true" >> ~/.npmrc');

  await preprocess();

  await executeScript(`
    cd ${config[package]} && npm i
    cd ${config[package]} && npm run build
    cd ${config[package]} && npm publish --registry https://registry.npmjs.org/ --access public --dry-run
  `);
};

const updateDemos = async version => {
  await updatePackage(config['angular-demo'], {
    version,
    dependencies: {
      '@six-group/ui-library': version,
    },
  });

  await executeScript(`
    cd ${config['angular-demo']} && npm i
  `);

  await updatePackage(config['react-demo'], {
    version,
    dependencies: {
      '@six-group/ui-library': version,
      '@six-group/ui-library-react': version,
    },
  });

  await executeScript(`
    cd ${config['react-demo']} && npm i
  `);

  await updatePackage(config['js-demo'], {
    version,
    dependencies: {
      '@six-group/ui-library': version,
    },
  });

  await executeScript(`
    cd ${config['js-demo']} && npm i
  `);

  await updatePackage(config['vue-demo'], {
    version,
    dependencies: {
      '@six-group/ui-library': version,
    },
  });

  await executeScript(`
    cd ${config['vue-demo']} && npm i
  `);
};

const main = async () => {
  // await loginNpm();

  const version = await getPackageVersion(config['@six-group/ui-library']);

  await publishPackage(version, '@six-group/ui-library');

  await publishPackage(version, '@six-group/ui-library-react', {
    preprocess: async () => {
      await updatePackage(config['@six-group/ui-library-react'], {
        version,
        dependencies: {
          '@six-group/ui-library': version,
        },
      });
    },
  });

  await publishPackage(version, '@six-group/ui-library-vue', {
    preprocess: async () => {
      await updatePackage(config['@six-group/ui-library-vue'], {
        version,
        dependencies: {
          '@six-group/ui-library': version,
        },
      });
    },
  });

  /*  if (process.argv.includes('--update-deps')) {
    await updateDemos(version);
  }*/

  await tag(version);
};

main().catch(err => {
  console.log(err);
  process.exit(1);
});
