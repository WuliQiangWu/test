/**
 * 2.属性检验法
 */
(function(){
    /**
     * 用注释来定义一个接口
     * interface PersonDao(){
     *      function add(obj)
     *      function remove(obj)
     *      function find(id)
     * }
     */
    //我们用注释的方式来实现
    /**
     * personDaoImpl implement interface
     */
    var PersonDaoImpl = function(){
        this.implementInterface=['PersonDao']
    };
    PersonDaoImpl.prototype.add=function(obj){
        alert(obj)
    };
    PersonDaoImpl.prototype.remove=function(obj){

    };
    PersonDaoImpl.prototype.find=function(id){

    };
    function  addObj(obj){
        var PersonDao = new PersonDaoImpl();
        //开始检查
        if(!impl(PersonDao,'PersonDao')){
            throw new Error('类PersonDaoImpl没有实现接口PersonDao')
        }
        else{
            PersonDao.add(obj)
        }
    }
    addObj('hello world');
    /**
     * 它接受的是一个不定参数
     */
    function impl(object){
        //遍历传入对象的属性
        for(var i=1;i<arguments.length;i++){
            var interfaceName = arguments[1];
            var interfaceFound = false;
            for(var j=0;j<object.implementInterface.length;j++){
                if(object.implementInterface[j]==interfaceName){
                    interfaceFound=true;
                    break;
                }
            }
            if(!interfaceFound){
                return false;
            }
        }
        return true;
    }
})();