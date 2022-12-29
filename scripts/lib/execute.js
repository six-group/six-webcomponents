const spawn = require('child_process').spawn;

const defaultExecuteCommandOptions = {
  responses: {},
  stdout: true,
};

const ERRORS = ['npm ERR!', 'ERROR'];

const executeCommand = async (command, options = defaultExecuteCommandOptions) => {
  if (options.stdout) {
    console.log(`--> ${command}`);
  }

  return new Promise((resolve, reject) => {
    const spawned = spawn(command, { shell: true });

    spawned.on('error', error => {
      reject(error);
    });

    let stdout = '';

    spawned.stdout.on('data', data => {
      if (options.stdout) {
        process.stdout.write(data);
      }

      stdout = data.toString();

      Object.entries(options.responses || {}).forEach(([text, callback]) => {
        if (stdout.includes(text)) {
          callback(spawned.stdin);
        }
      });
    });

    spawned.stderr.on('data', data => {
      if (options.stdout) {
        process.stdout.write(data);
      }

      const text = data.toString();

      if (ERRORS.some(prefix => text.includes(prefix))) {
        reject(text);
      }
    });

    spawned.on('close', () => {
      resolve(stdout.trim());
    });
  });
};

const commented = text => !text.trim().startsWith('//');
const trim = text => text.trim();

const executeScript = script => {
  return script
    .split('\n')
    .map(trim)
    .filter(Boolean)
    .filter(commented)
    .reduce((acc, cmd) => {
      return acc.then(() => executeCommand(cmd));
    }, Promise.resolve());
};

module.exports = { executeCommand, executeScript };
