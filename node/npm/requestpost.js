/**
 * Created by pc on 2016/10/11.
 */
request.post({'url':'192.168.1.111',form:{'name':'dahuang','book':'node.js'}},function(error,response,result){
    console.log(result)
})
//第二种
request.post('192.168.1.111',{'form': {'name':'dahuang','book':'node.js'}},function(error,response,result){
    console.log(result)
})