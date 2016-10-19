/**
 * Created by pc on 2016/10/8.
 */
function ParseDns(res,req){
    var postData='';
    req.addEventListener('data',function(postDataChunk){
        postData+=postDataChunk;
    });

    req.addListener('end',function(){
        var retData= getDns(postData,function(domain,address){
            res.writeHead(200,{'ContentType':'text/html'});
            res.end('<html><head><meta content="text/html; charset=UTF-8" http-equiv="Content-Type"/></head><div style="text-align: center">Domain:<span style="color:red">'+domain+'</span>IP:<span style="color:red">'+address.join(',')+'</span></div></html>');
        });
        return;
    })
}
function getDns(psotData,callback){
    var domain=querystring.parse(postData).search_dns;
    dns.resolve(domain,function(err,addresses){
        if(!addresses){
            addresses=['不存在域名']
        }
        callback(domain,addresses)
    })
}
