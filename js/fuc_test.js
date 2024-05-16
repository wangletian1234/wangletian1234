//这是测试各种函数的js脚本
//周期刷新显示内容测试，下面以显示实时时钟为例，主要用到setInterval函数。
var myVar = setInterval(function(){ myTimer() }, 1000);
function myTimer() {
var d = new Date();
var t = d.toLocaleTimeString();
document.getElementById("timer").innerHTML = t;
}
// 创建MQTT客户端
const client = mqtt.connect('wss://broker.emqx.io:8084/mqtt');
// 订阅主题，下面主题可以修改为你需要的。
client.subscribe('wangletian1234/ipv6');
// 监听消息到达事件，当有消息的时候就执行。
client.on('message', function (topic, message) {
    // 将订阅接收到的消息显示在页面上，后续你可以对接收到的信息分类单独显示，现在是全部显示出来。
    document.getElementById('sub_mesg').innerHTML = `订阅到的信息是：${message.toString()}`;
    document.getElementById('sub_mesg_a').innerHTML = `订阅到的信息是：${message.toString()}`;
 }
);
