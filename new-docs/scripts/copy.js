import path from "path";
import fse from "fs-extra";
import logger from "simple-node-logger";
import { fileURLToPath } from "url";

const log = logger.createSimpleLogger();

const __filename = fileURLToPath(import.meta.url);
console.log("Filename: ", __filename);

const __dirname = path.dirname(__filename);

const UI_LIBRARY_PATH = path.join(__dirname, "../../libraries/ui-library");

(async function main() {
  log.info("copy resources...");

  await fse.emptyDir(path.join(__dirname, "../.vitepress/lib/loader"));
  await fse.emptyDir(path.join(__dirname, "../.vitepress/lib/dist"));

  await fse.copy(
    path.join(UI_LIBRARY_PATH, "/dist"),
    path.join(__dirname, "../.vitepress/lib/dist")
  );

  await fse.copy(
    path.join(UI_LIBRARY_PATH, "/loader"),
    path.join(__dirname, "../.vitepress/lib/loader")
  );

  await fse.copy(
    path.join(`${UI_LIBRARY_PATH}/dist/ui-library/assets`),
    path.join(__dirname, "../.vitepress/public/components/assets")
  );

  log.info("Resources are copied");
})();
