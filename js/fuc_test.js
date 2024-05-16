//这是测试各种函数的js脚本
//周期刷新显示内容测试，下面以显示实时时钟为例，主要用到setInterval函数。
function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("timer").innerHTML = t;
}
var myVar = setInterval(function(){ myTimer() }, 1000);
