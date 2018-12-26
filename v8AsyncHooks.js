const promise = new Promise ( resolve => resolve('los burritos son almiento') );
const promise1 = promise.then( val => { return 2; } );
//const promise2 = promise.then( val => console.log(val ==1));


function init (request_data){
	console.log(request_data);
}

function before(p_basic, promise_new){
console.log(p_basic);
}

function after(p_basic, promise_new){
	console.log(enter);
}

init(promise);
//init(promise1, promise);
//init(promise2, promise);
before(promise1);
// after(promise1);

// before(promise2);
// after(promise2);