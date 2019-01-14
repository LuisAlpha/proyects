const cluster = require('cluster');

const http	 = require('http');

if (cluster.isMaster){
	let numReqs = 0;
	setInterval(() => {
	console.log(`numReqs = ${numReqs}`);
},1000);
function messageHandler(msg){
	if(msg.cmd && msg.cmd === 'notifyRequest'){
	numReqs += 1;
	}
}
const numsCPUs  = require('os').cpus().length;

for (let i =0; i < numsCPUs; i++){
	cluster.fork();
}

for (const id in cluster.workers){
	cluster.workers[id].on('message', messageHandler);
	cluster.workers[id].on('online', ()=>{
	console.log('proably this shit working');
	});
}

}else{
http.Server((req, res) => {
	res.writeHead(200);
	res.end('hello :3 \n');
	process.send({ cmd: 'notifyRequest'});
}).listen(8000);
}
