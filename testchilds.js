const { spawn } = require('child_process');

const subprocess = spawn('ls',['-a']);

subprocess.stdout.on('data',(data)=>{
console.log(data.toString());
});
