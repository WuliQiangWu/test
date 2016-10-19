/**
 * 1.注释方法
 * 最简单，但是功能也是最弱的
 * 他利用interface和implement“文字"
 * 把他们用注解的方式表现出来
 */
(function(){
    /**
     * 用注释来定义一个接口
     * interface ObjectDao(){
     *      function add(obj)
     *      function remove(obj)
     *      function find(id)
     * }
     */
    //我们用注释的方式来实现
        /**
         * personDaoImpl implement interface
         */
    var personDaoImpl = function(){

    };
    personDaoImpl.prototype.add=function(obj){

    };
    personDaoImpl.prototype.remove=function(obj){

    };
    personDaoImpl.prototype.find=function(id){

    };
    /**
    *千万不要感觉他是没有任何意义的
     * 大型的项目靠的就是规范和标准
     * 这样的写法会叫你的程序员在没有实现之前有充分的时间做代码的设计和架构
     * 缺点：要人为的遵守
    */
})();