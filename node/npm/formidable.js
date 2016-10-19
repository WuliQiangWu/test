/**
 * Created by pc on 2016/10/11.
 */
var  formidable=require('formidable');
var form = new formidable.IncomingForm();
form.parse(req,function(err,fields,files){
    res.writeHead(200,{'content-type':'text/plain'});
    res.write('recives upload:\n\n');
    res.end(util.inspect({fields:fields,files:files}))
})