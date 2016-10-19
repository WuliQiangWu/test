/**
 * Created by pc on 2016/10/8.
 */
//入口模块
    //首先加载两个模块

var http=require('http');
var url = require('url');
//加载模块文件
var router = require('./router.js');

//创建http服务器
http.createServer(function(req,res){
    var pathname=url.parse(req.url).pathname;
    req.setEncoding('utf8');
    res.writeHead(200,{'Content-Type':'text/html'});
    router.router(res,req,pathname);
}).listen(3000,'192.168.1.114');
