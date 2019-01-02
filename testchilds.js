const  util = require('util');
const execFile =  util.promisify(require('child_process').execFile);
async  function getVersion(){
const { stdout, stderr } = await execFile('node', ['--version']);

console.log(`informacion en stdout : ${stdout}`);

}

getVersion();
