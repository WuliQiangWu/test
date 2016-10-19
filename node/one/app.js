var http=require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('hello world');
    })
    .listen(2016,'192.168.1.107');
console.log('server running at Http://192.168.1.107/');

var http=require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('hello world');
}).listen(8000,'192.168.1.113');
console.log('server running at Http://192.168.1.113/');

//        require('http'):获取Node.js原声模块提供的hTTp模块对象；
//        res.writeHead:通过res的HTTP响应对象，编写http信息的响应头
//        http.createServer();使用http对象的API方法createServer来创建服务器
//        listen 是HTTP对象的一个方法，其主要是启动服务器监听的端口和IP地址，第二个参数是可选的，默认是127.0.0.1；
//        console.log() 是js和node.js共有的调试接口