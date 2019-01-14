const ah = require('async_hooks');
ah.createHook({ init() {} }).enable();
Promise.resolve(1729).then(() => {
  console.log(`eid ${ah.executionAsyncId()} tid ${ah.triggerAsyncId()}`);
});