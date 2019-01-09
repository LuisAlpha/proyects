var rexec = require('remote-exec');
 
// see documentation for the ssh2 npm package for a list of all options 
var connection_options = {
    port: 22,
    username: 'root',
    privateKey: require('fs').readFileSync('~/.ssh/id_rsa'),
    passphrase: '4lc0mAdm'
};
 
var hosts = [
    '172.30.27.9'
];
 
var cmds = [
    'ls -l',
    'cat /etc/hosts'
];
 
rexec(hosts, cmds, connection_options, function(err){
    if (err) {
        console.log(err);
    } else {
        console.log('Great Success!!');
    }
});