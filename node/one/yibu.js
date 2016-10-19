/**
 * Created by pc on 2016/9/21.
 */
var fs = require('fs');
function getFileData(callback){
    fs.readFile('index.conf',function(){
        clasback(data)
    })
}

function returnData(callback){
    getFileData(function(data){
        setTimeout(function(){
            callback(data);
        },1000)
    })
}
