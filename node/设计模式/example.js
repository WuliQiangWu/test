/**
 * Created by pc on 2016/10/12.
 */
exports.name='dahuang';
var myName='idahuang';
exports.init=function(itName){
    if(!itName){
        setName(myName)
    }
    else{
        setName(itName);
    }
};
exports.showName=function(){
    console.log(name)
};
exports.setName=function(){
    name=myName;
}