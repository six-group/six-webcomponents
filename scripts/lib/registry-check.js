const { executeCommand } = require('./execute');

const responses = {
  'Logged in as': stdin => stdin.end(),
};

const getPublishedVersions = async package => {
  try {
    const text = await executeCommand(`npm show ${package} versions`, { stdout: false });
    // replace sigle quotes
    return JSON.parse(text.replace(/'/g, '"'));
  } catch (err) {
    if (['npm ERR! code E404', 'npm ERR! 404', 'npm ERR! '].some(text => String(err).startsWith(text))) {
      // not published yet
      return [];
    }
    throw err;
  }
};

module.exports = { getPublishedVersions };
