const cluster = require('cluster');

const http = require('http');

const numCPUs = require('os').cpus().length;

if(cluster.isMaster){
	console.log(`Master ${process.pid} is running`);

	for(let i =0 ; i< numCPUs; i++){
		cluster.fork().on('disconnect', () =>{
		console.log('this worker his died :v');
		});
	}

	cluster.on('exit',(worker, code, signal) =>{
		console.log(`worker ${worker.process.pid} died`);
	});

}else {

	http.createServer((res, req) =>{
		res.writeHead(200);
		res.end('hello little bitch\n');
	}).listen(8000);
	console.log(`Worker ${process.pid} started`);

}
