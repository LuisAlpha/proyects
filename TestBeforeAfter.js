const async_hooks = require('async_hooks');
const fs = require('fs');

let indent = 0;

async_hooks.createHook({

	init(asyncId, type, triggerAsyncId){
		const eid = async_hooks.executionAsyncId();
		const identStr = ' '.repeat(indent);
		fs.writeSync(1,
			`${identStr}${type}(${asyncId}):`+
			` triger: ${triggerAsyncId} execution : ${eid}\n`);
	},
	before(asyncId){
		const  identStr = ' '.repeat(indent);
		fs.writeFileSync('log.out',`${identStr}before: ${asyncId}\n`,{flag:'a'});
		indent +=2;
	},
	after(asyncId){
		indent -=2;
		const indentStr = ' '.repeat(indent);
		fs.writeFileSync('log.out',
			`${indentStr}after: ${asyncId}\n`,{flag:'a'});
	},
	destroy(asyncId){
		const indentStr = ' '.repeat(indent);
		fs.writeFileSync('log.out',
			`${indentStr}destroy: ${asyncId}\n`,{flag:'a'});
	},
}).enable();

require('net').createServer(() => {}).listen(8080, () =>{
	setTimeout(()=>{
		console.log('>>>', async_hooks.executionAsyncId());
	},10);
});

