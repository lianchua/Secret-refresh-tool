/**
 * Created by Administrator on 2020年9月14日.
 */
window.onload = function () {
    // 获取当前页面的url
    var url = location.href;
    // 定下一个flag 默认值为false
    let flag = false
    // 延时执行程序，1秒钟后把flag变为true
    setTimeout(() => {
        flag = true
    }, 1000);
    //全局按键监听
    document.onkeydown = function (e) {  //对整个页面文档监听 
        var keyNum = window.event ? e.keyCode : e.which;  //获取被按下的键值 
        //判断如果用户按下了回车键（keycody=13）
        // alert(keyNum);
        // console.log('key' + keyNum)
        // 如果按键键值等于13并且flag为true的情况执行if内函数
        if (keyNum == 13 && flag) {
            console.log('键值正确，且flag为true')
            // 判断当前页面的url是否是我们想要实现按住刷新的url
            if (url.indexOf('http://112.193.99.49:7890/test.html') != -1) {
                // 捕获异常
                try {
                    //获取页面上某个指定的class名字的dom对象
                    var dom = document.getElementsByClassName('pandora-table-cell-content')
                    // console.log(dom)
                    // console.log(dom.length)
                } catch (error) {
                    // 如果报错了，就发送0到后台
                    chrome.runtime.sendMessage(0, function (response) {
                        console.log('content get response:', response);
                    });
                    window.location.href = window.location.href // 刷新页面
                }
                // 通过dom对象的length判断其是否存在，存在length>0
                if (dom.length > 0) {
                    chrome.runtime.sendMessage(1, function (response) {
                        console.log('content get response:', response);
                    });
                    return; //既然找到了，就结束程序执行吧！
                } else if (dom.length == 0) { //不存在就==0
                    chrome.runtime.sendMessage(0, function (response) {
                        console.log('content get response:', response);
                    });
                    window.location.href = window.location.href // 刷新页面
                }
            }
        }
    }
}
