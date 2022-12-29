const { readFile, writeFile } = require('fs/promises');

const getPackageVersion = async packagePath => {
  const buffer = await readFile(`${packagePath}/package.json`);
  const { version } = JSON.parse(buffer.toString());
  return version;
};

const updatePackage = async (packagePath, updates) => {
  const buffer = await readFile(`${packagePath}/package.json`);
  const json = JSON.parse(buffer.toString());

  const isObject = item => {
    return item && typeof item === 'object' && !Array.isArray(item);
  };

  const merge = (target, ...sources) => {
    if (!sources.length) {
      return target;
    }
    const source = sources.shift();

    if (isObject(target) && isObject(source)) {
      for (const key in source) {
        if (isObject(source[key])) {
          if (!target[key]) {
            Object.assign(target, { [key]: {} });
          }
          merge(target[key], source[key]);
        } else {
          Object.assign(target, { [key]: source[key] });
        }
      }
    }

    return merge(target, ...sources);
  };

  const updated = merge(json, updates);
  const text = JSON.stringify(updated, null, 2);

  await writeFile(`${packagePath}/package.json`, text);
};

module.exports = { getPackageVersion, updatePackage };
