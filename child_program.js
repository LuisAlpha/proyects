const  fs = require('fs');
const  { spawn } = require('child_process');
const  out = fs.openSync('./out.log','a');
const  err = fs.openSunc('./out.log','a');

const subprocess = spawn('prg',[], {
detached: true,
stdio : ['ignore', out, err]
});

subprocess.unref();
