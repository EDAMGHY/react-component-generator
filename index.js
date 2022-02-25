#!/usr/bin/env node
const { program } = require('commander');
const chalk = require('chalk');
const createFileFolder = require('./utils');
const { createSpinner } = require('nanospinner');
const package = require('./package.json');

const log = console.log;

program
  .version(package.version)
  .description('A React Component Generator')
  .parse();
const path = process.cwd();
const spinner = createSpinner(chalk.yellow('Creating File...')).start();
if (program.args.length === 0) {
  setTimeout(() => {
    log(chalk.redBright('Please Enter a Folder(s)/File Name !'));
  }, 500);
} else if (program.args.length === 1) {
  let fileName = program.args[0];
  fileName = fileName[0].toUpperCase() + fileName.slice(1);
  if (path.includes('src') || path.includes('public')) {
    log(chalk.red('You should be in the root directory of your project!'));
  } else {
    setTimeout(() => {
      createFileFolder(fileName);
      spinner.success({
        text: chalk.green(`${fileName} Component Created...`),
      });
    }, 2000);
  }
} else {
  try {
    const folderName = program.args[0];
    let fileName = program.args[1];
    fileName = fileName[0].toUpperCase() + fileName.slice(1);

    if (path.includes('src') || path.includes('public')) {
      log(chalk.red('You should be in the root directory of your project!'));
    } else {
      setTimeout(() => {
        createFileFolder(fileName, folderName, true);
        spinner.success({
          text: chalk.green(`${fileName} Component Created...`),
        });
      }, 2000);
    }
  } catch (err) {
    log(chalk.bgRed.white(err.message));
  }
}
