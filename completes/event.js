const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}

const myEmitter =  new MyEmitter();

function pong(){
console.log('pong');
}

myEmitter.on('ping', pong);
myEmitter.once('ping', pong);
myEmitter.removeListener('ping', pong);


myEmitter.emit('ping');
myEmitter.emit('ping');
