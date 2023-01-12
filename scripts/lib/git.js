const { executeCommand } = require('./execute');

const getBranchName = async () => {
  return executeCommand('git rev-parse --abbrev-ref HEAD');
};

const getTags = async () => {
  const text = await executeCommand('git tag');
  return text.split('\n').map(s => s.trim());
};

const isBranch = async nameOrNamesArray => {
  const branch = await getBranchName();
  return [].concat(nameOrNamesArray).includes(branch);
};

const tag = async version => {
  const tags = await getTags();

  if (!tags.includes(version)) {
    await executeCommand(`git tag "${version}"`);

    await executeCommand('git push --tags -v', {
      responses: {
        'Username for': stdin => stdin.write(`${process.env.bamboo_realBuildUser}\n`),
        'Password for': stdin => stdin.write(`${process.env.bamboo_realBuildUserPassword}111\n`),
        'remote:': stdin => stdin.end(),
      },
      stdout: true,
    });
  } else {
    console.log(`Tag ${version} already exist.`);
  }
};

module.exports = { isBranch, tag };
