var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200, {'ContentType':'html/plain'});
    var retHtml="<html><head><title>Node.js Test</title></head><body><div>Hi Node,I  am like you so much</div></body></html>";
    res.end(retHtml);
    })
    .listen(2016,'192.168.1.107')