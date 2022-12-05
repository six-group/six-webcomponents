const git = require('git-rev-sync');
const fse = require('fs-extra');
const log = require('simple-node-logger').createSimpleLogger();
const { version } = require('../../source/packages/ui-library/package');

const short = git.short();

log.info(`Building docs for version: "${version}" short: "${short}"`);
fse.writeJsonSync('src/.vuepress/lib/version-details.json', { version, short });
