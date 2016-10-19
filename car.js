/**
 * Created by pc on 2016/10/12.
 */
window.onload=function(){
    if(!document.getElementsByClassName){
        document.getElementsByClassName=function(clas){
            var ret=[];
            var els = document.getElementsByTagName('*');
            for(var i=0;i<els.length;i++){
                if(els[i].className==clas
                    ||els[i].className.indexOf(''+clas+ '')>=0
                    ||els[i].className.indexOf(clas+ '')>=0
                    ||els[i].className.indexOf(''+clas)>=0){
                    ret.push(els[i]);
                }
            }
            return ret;
        }
    }

    var cartTable = document.getElementById('cartTable');
    var tr = cartTable.children[1].rows;
    var checkInput = document.getElementsByClassName('check');
    var checkAllInput = document.getElementsByClassName('check-all')
};