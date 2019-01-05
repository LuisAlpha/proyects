const fs = require('fs');
const { Console } = require('console');
const output  =	fs.createWriteStream('./stdout.log');
const errOutput = fs.createWriteStream('./stderr.log');
const logger = new Console({ stdout: output, stderr: errOutput });
logger.assert(false ,'whoops %s work' ,'didn\'t');
