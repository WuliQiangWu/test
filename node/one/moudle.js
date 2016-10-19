/**
 * Created by pc on 2016/9/21.
 */
var http=require('http'), //创建服务器
    dns=require('dns'),   //DNS查询 返回的DNS服务器IP地址
    fs=require('fs'),     //文件操作
    url=require('url'),   //url处理
    querystring = require('querystring'); //字符串处理(前端传回)

http.creatServer(function(req,res){
    res.writeHead(200,{'ContentType':'text/html'});

    var readPath=_dirname+'/'+url.parse('index.html').pathname;
    var indexPage =fs.readFileSync(readPath);

    res.end(indexPage);
})
.listen(2016,'192.168.1.107');