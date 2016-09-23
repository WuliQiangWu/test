//var  http = require('http');
//
//var  hostname = '127.0.0.1';
//var  port = 3000;
//
//var  server = http.createServer((req, res) => {
//res.statusCode= 200;
//res.setHeader('Content-Type', 'text/plain');
//res.end('Hello NO\n');
//});
//
//server.listen(port, hostname,() => {
//console.log(`Server running at http://${hostname}:${port}/`);
//});
//

var http = require('http');
http
		.createServer(function(req,res){
			res.writeHead(200,{'Content-Type':'text/plain'})
			res.write('hello world')
			res.end()
		})
		.listen(2015)
