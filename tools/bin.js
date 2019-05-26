#!/usr/bin/env node

/**
 * node 10.15.3
 */
const chalk = require('chalk');
const currentNodeVersion = process.versions.node;
let major = currentNodeVersion.split('.')[0];

if (major < 8) {
    console.error(
        chalk.red(
            'You are running Node ' +
            currentNodeVersion +
            '.\n' +
            'img_tools requires Node 8 or higher. \n' +
            'Please update your version of Node.'
        )
    );
    process.exit(1);
}

require('./index');
