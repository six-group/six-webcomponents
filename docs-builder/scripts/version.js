const git = require('git-rev-sync');
const fse = require('fs-extra');
const log = require('simple-node-logger').createSimpleLogger();
const { version } = require('../../libraries/ui-library/package.json');

const short = git.short();

log.info(`Building docs for version: "${version}" short: "${short}"`);
fse.writeJsonSync('src/.vuepress/lib/version-details.json', { version, short });
