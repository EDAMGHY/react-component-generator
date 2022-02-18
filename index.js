#!/usr/bin/env node
const { program } = require('commander');
const chalk = require('chalk');
const fs = require('fs');
const createFileFolder = require('./utils');
const { createSpinner } = require('nanospinner');

const log = console.log;
program.version('1.1.2').description('A React Component Generator').parse();

if (program.args.length === 0) {
  setTimeout(() => {
    log(chalk.redBright('Please Enter a Folder(s)/File Name !'));
  }, 500);
} else if (program.args.length === 1) {
  let fileName = program.args[0];
  fileName = fileName[0].toUpperCase() + fileName.slice(1);
  const spinner = createSpinner(chalk.yellow('Creating File...')).start();
  setTimeout(() => {
    createFileFolder(fileName);
    spinner.success({
      text: chalk.green(`${fileName} Component Created...`),
    });
  }, 2000);
} else {
  try {
    const folderName = program.args[0];
    let fileName = program.args[1];
    fileName = fileName[0].toUpperCase() + fileName.slice(1);
    const spinner = createSpinner(chalk.yellow('Creating File...')).start();
    setTimeout(() => {
      createFileFolder(fileName, folderName, true);
      spinner.success({
        text: chalk.green(`${fileName} Component Created...`),
      });
    }, 2000);
  } catch (err) {
    log(chalk.bgRed.white(err.message));
  }
}
