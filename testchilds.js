const cluster = require('cluster');

const http = require('http');

const numCPUs = require('os').cpus().length;

if(cluster.isMaster){
console.log(`Master ${process.pid} is running`);
}

for(let i =0 ; i< numCPUs; i++){
cluster.fork();
}
cluster.on('exit',());
