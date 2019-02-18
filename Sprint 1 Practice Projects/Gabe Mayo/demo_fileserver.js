var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {	//Create the server object
  var q = url.parse(req.url, true);		//Parse the url
  var filename = "." + q.pathname;		//Create filname
  fs.readFile(filename, function(err, data) {
    if (err) {							//Generate a 404 error if content cannot be found
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'}); //Write the content to the page if found
    res.write(data);
    return res.end();
  });
}).listen(8080);