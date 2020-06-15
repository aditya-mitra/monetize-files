#!/usr/bin/env node

const takeInput= require('../takeInput');
const scanDirs = require('../scanDirs');
const addTag   = require('../addTag');

const input = takeInput();


if (!input) {
	process.exit(0);
}

console.log('=====================\nMonetizing files now\n=====================\n\n');

let mfiles;
if ('exclude' in input)
	mfiles = scanDirs(input.filetype, input.exclude.split(','));
else
	mfiles = scanDirs(input.filetype);

addTag(mfiles, input.wallet);