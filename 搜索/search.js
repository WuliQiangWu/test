var oBtn = document.getElementById('btn');
var oText = document.getElementById('text');
var oList = document.getElementById('con1');
var oBody = document.getElementsByTagName('body')[0];
function baidu(data) {
    //console.log(data);

    var arr = data.s;
    var str = '';
    for (var i = 0; i < arr.length; i++) {
        str += '<li id="list">' + arr[i] + '</li>'
    }
    oList.innerHTML = str;
    oList.style.display = "block";

    var oLi=oList.getElementsByTagName('li');
    for(var j=0;j<oLi.length;j++){
        oLi[j].index=j;
        oLi[j].onclick=function(){
            oText.value=null;
            oText.value=this.innerHTML;
            //console.log(oText.value);
            oList.style.display = "none";
        }
    }
}
oText.oninput = function () {
    var _val = oText.value;
    if (_val != '') {
        var oScr = document.createElement('script');
        oScr.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" + _val + "&cb=baidu";
        oBody.appendChild(oScr);
    }
    else {
        oList.style.display = "none";
    }
};
