import git from "git-rev-sync";
import fse from "fs-extra";
import logger from "simple-node-logger";

const log = logger.createSimpleLogger();

const { version } = import("../../libraries/ui-library/package");

const short = git.short();

log.info(`Building docs for version: "${version}" short: "${short}"`);
fse.writeJsonSync(".vitepress/lib/version-details.json", { version, short });
