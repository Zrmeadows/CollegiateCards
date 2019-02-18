var events = require('events');

var eventEmitter = new events.EventEmitter();	//Creates an emitter

var connectHandler = function connected() {		//Creates a new event handler
	console.log('Connection Successful.');
	eventEmitter.emit('data_received');			//Fires an event called data_received
}

eventEmitter.on('connection', connectHandler);		//Binds 'connection' event with connectHandler

eventEmitter.on('data_received', function() {		//Binds 'data_received' event with anonymous function as handler
	console.log('data received successfully.');
});

eventEmitter.emit('connection');

console.log("Program ended.");