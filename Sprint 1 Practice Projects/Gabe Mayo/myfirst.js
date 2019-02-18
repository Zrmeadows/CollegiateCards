/*Practice project for learning node.js*/
var http = require('http');	//includes the http module

//create a server object:
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'}); //write an HTTP header to indentify content type
	res.write('Hello World!'); //write a response from the server
	res.end();	//end response
}).listen(8080); //listen on port 8080