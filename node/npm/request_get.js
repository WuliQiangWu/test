/**
 * Created by pc on 2016/10/11.
 */
var request=require(request);
request.get('192.168.1.111',function(error,response,result){
    console.log(result);
})