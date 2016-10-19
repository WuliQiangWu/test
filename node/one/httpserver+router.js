/**
 * Created by pc on 2016/9/21.
 */
var http=require('http');
http.createServer(function(req,res){
        res.writeHead(200,{'ContentType':'text/html'});

        var pathname=url.parse(req.url).pathname; //获取当前请求资源的url路径，例如：‘/parse’
        req.setEncoding('UTF-8'); //设置数据格式，防止出现乱码
        router(res,req,pathname);//处理不同的url请求资源，分发处理
    })
    .listen(2016,'192.168.1.107');
console.log('server running at http://192.168.1.107');
function router(res,req,pathname){
    switch (pathname){
        case '/path':
            parseDns(res,req);
            break;
        default:
            goIndex(res,req)
    }
}

