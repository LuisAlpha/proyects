var exec = require('ssh-exec');


exec('ls -lh',{
user: 'root',
host: '172.30.27.9',
password:'my-user-password'
}).pipe(process.stdout);

