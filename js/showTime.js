var t = null;
function prefixZero(n, m) {
    var _a = (Array(m).join(0) + n).slice(-m);
    return _a;
}
t = setTimeout(time, 1000); //开始运行
function time() {
    clearTimeout(t); //清除定时器
    dt = new Date();
    var y = dt.getFullYear();
    var mt = dt.getMonth() + 1;
    var day = dt.getDate();
    var h = prefixZero(dt.getHours(), 2); //获取时
    var m = prefixZero(dt.getMinutes(), 2); //获取分
    var s = prefixZero(dt.getSeconds(), 2); //获取秒
    var ms = prefixZero(dt.getMilliseconds(), 3); //获取秒
    document.querySelector(".showTime").innerHTML =
        "当前时间：" + y + "年" + mt + "月" + day + "日" + h + ":" + m + ":" + s;
    t = setTimeout(time, 1000); //设定定时器，循环运行
    console.log('时间模块编写完毕');
}