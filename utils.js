const fs = require('fs');
const chalk = require('chalk');
const log = console.log;
const { exec } = require('child_process');

const createFileFolder = (file, folder = 'src', isSrc = false) => {
  if (!fs.existsSync(`${isSrc ? 'src/' : ''}${folder}`)) {
    fs.mkdirSync(`${isSrc ? 'src/' : ''}${folder}`, { recursive: true });
  }
  exec(
    `code -r ${isSrc ? 'src/' : ''}${folder}/${file}.js`,
    (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
    }
  );
  fs.writeFile(
    `${isSrc ? 'src/' : ''}${folder}/${file}.js`,
    `import React from 'react';
const ${file} = () => {
  return <div>${file}</div>;
};
export default ${file};
          `,
    function (err) {
      if (err) log(chalk.red(err.message));
    }
  );
};
module.exports = createFileFolder;
