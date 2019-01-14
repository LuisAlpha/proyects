const cluster = require('cluster');
const http = require('http');

if(cluster.isMaster){
const worker = cluster.fork();
worker.send('hi sr');

}else if( cluster.isWorker){
process.on('message', (msg) =>{
process.send(msg);
});
}
