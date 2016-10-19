/**
 * 鸭式变形法
 * 这个方法来源于一个国外的老头，他有一句名言（jim）
 * “像鸭子一样走路并且会嘎嘎叫的东西就是鸭子”
 * 换言之，如果对象具有 与接口所定义的方法名 同名的所有方法
 * 那么我就认为你就是实现本接口
 */
(function(){
    //定义一个接口类
    var InterFace = function(name,methods){
        if(arguments.length!=2){
            alert('interface must have two paramters...')
        }
        this.name=name;
        this.methods=[];//定义一个空数组来装载函数名
        for(var i=0;i<methods.length;i++){
            if(typeof methods[i] !=="string"){
                alert('method name must is string...')
            }
            else{
                this.methods.push(methods[i])
            }
        }
    };
    //定义接口的静态方法，来实现接口与实现类的直接检验
    //静态方法不要写成interface.prototype.* 因为这是写到接口的原型链上的
    //我们要把静态函数直接写到类层次上
    InterFace.ensureImplements=function(object){
        if(arguments.length<2){
            alert('必须最少是两个参数....');
            return false;
        }
        //遍历
        for(var i=1;i<arguments.length;i++){
            var inter=arguments[i];
            //如果是接口就必须是interface类型
            if(inter.constructor!=InterFace){
                throw new Error('if is interface class must is interface type')
            }
            //遍历函数集合并分析
            for(var j=0;j<inter.methods.length;j++){
                var method = inter.methods[j];
                //实现类中必须有方法名字和接口中所有的方法名相同
                if(!object[method]||typeof object[method]!='function'){
                    throw new Error("实现类并没有完全实现接口中的所有方法...")
                }
            }
        }
    };

    //应用
    //定义自己的接口
    var GridManager = new InterFace('GridManager',['add','remove','list']);
    var FormManager = new InterFace('FormManager',['save']);

    function ComManager(){
        //先实现方法
        this.add=function(){
            alert('ok')
        };
        this.remove=function(){};
        this.list=function(){};
        this.save=function(){};

        //检验
        InterFace.ensureImplements(this,GridManager,FormManager)
    }
    var c =new ComManager();
    c.add();

})();