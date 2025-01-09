const eventCall = require('./logEvents.js');
const eventEmitter = require('events');

class MyEmmitter extends eventEmitter { };

const myEmmitter = new MyEmmitter();

myEmmitter.on('log', (msg) => eventCall(msg));

setTimeout (()=>{
    myEmmitter.emit('log', 'Event emmitted');
}, 2000);
