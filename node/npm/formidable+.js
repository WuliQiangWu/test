/**
 * Created by pc on 2016/10/11.
 */
var formidable=require('formidable'),
    http=require('http'),
    util=require('util');
http.createServer(function(res,req){
    if(req.url=='/upload'&&req.method.toLowerCase()=='post'){
        var form = new formidable.IncomingForm();
        form.parse(req,function(err,fields,files){
            res.writeHead(200,{'Content-Type':'text/plain'});
            res.write('received upload:\n\n');
            res.end(util.inspect({fields:fields,files:files}));
        });
        return ;
    }
    res.writeHead(200,{'content-type':'text/html'});
    res.end(
        '<input action="/upload" enctype="multipart/form-data" method="post" />'+
            '<input type="text" name="title"/></br>'+
            '<input type="file" name="upload" multiple="multiple"/></br>'+
            '<input type="submit" value="Upload"/></br>'+
            '</form>'
    );
}).listen(2014,'192.168.1.111');