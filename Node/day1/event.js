var events = require('events');

var eventEmitter = new events.EventEmitter();

var myEvent = function()
{
    console.log("event1 emitted");
}

eventEmitter.on("event1", myEvent);

console.log("emit event1")
eventEmitter.emit("event1");