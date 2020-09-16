/**
 * Created by Administrator on 2020年9月16日.
 */
window.onload = function () {
    var url = location.href;
    let flag = false;
    setTimeout(() => {
        flag = true;
    }, 1000);
    //实际使用 
    document.onkeydown = function (e) {  //对整个页面文档监听 
        var keyNum = window.event ? e.keyCode : e.which;  //获取被按下的键值 
        //判断如果用户按下了回车键（keycody=13）
        // alert(keyNum);
        // console.log('key' + keyNum)

        if (keyNum == 107 && flag) {
            console.log('我要刷新');
            if (url.indexOf('http://192.168.0.1/test.html') != -1) {
                try {
                    var dom = document.getElementsByClassName('className');
                    // console.log(dom)
                    // console.log(dom.length)
                } catch (error) {
                    chrome.runtime.sendMessage(0);
                    window.location.href = window.location.href;
                }
                if (dom.length > 0) {
                    chrome.runtime.sendMessage(1);
                    return;
                } else if (dom.length == 0) {
                    chrome.runtime.sendMessage(0);
                    flag = false;
                    console.log(flag);
                    window.location.href = window.location.href;
                    console.log(flag);
                    return;
                }
            }
        }
    }
}
