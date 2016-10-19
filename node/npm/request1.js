/**
 * Created by pc on 2016/10/11.
 */
var http=request('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('hello Word!!'+req.method);
}).listen(2015,'192.168.1.110');
console.log('Server running at http://192.168.1.110');