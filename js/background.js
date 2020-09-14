/**
 * Created by Administrator on 2020年9月14日.
 */
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {

    // 延时加载阅读content.js传递过来的消息
    setTimeout(function () {
        // 成功收到消息后返回给content.js
        sendResponse('content messages to background success !');
        // 判断收信内容
        if (message == 1) {
            console.log('class is found')
            // alert('found')
        } else if (message == 0) {
            console.log('class is not find');
            // alert('not found')
        }
    }, 1000);
    return true; // 这是重点，没有return true，上面content.js将收到的是undefined

});
// 测试的方法
function start() {
    // alert('popup加载了background的方法');
}
