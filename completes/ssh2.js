var Connection = require('ssh2');


var c = new Connection();

c.on('connect', function(){
console.log(`Connection : ${connect}`);
});

c.on('ready', function(){
console.log(`Connection : ${ready}`);
});

c.exec('uptime',function(err, stream){
stream.on('data', function(data, extended){
	console.log((extended === 'stderr' ? 'STDERR: ': 'STDOUT: ' + data));
stream.on('end', function(){
console.log('Stream :: EOF');
});

stream.on('close', function(){
console.log('stream :: close');
});

stream.on('exit', function(code, signal){
console.log(`Stream :: exit :: code ${code} signal: ${signal}`);
c.end();
});
});
});

c.on('error',function(err){
console.log(`Connection :: error ${err}`);
});

c.on('end',function(){
console.log('Connection :: end');
});

c.on('close', function(had_error){
console.log('Connection :: close');
});

c.connect({
host: '172.30.27.9',
port: '22',
username: 'root',
password: '4lc0mAdm',
privateKey: require(fs).readFileSync('/root/.ssh/id_rsa')
});
