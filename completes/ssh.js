var config  = {
	username:'root',
	Password:'4lc0mAdm',
	host:sshServer,
	port:22
};

var server = require('tunnel-ssh');

server(config, function(error, server){
if(error){
console.error(error);
}
});
