// 先获取background页面
var bg = chrome.extension.getBackgroundPage();
//再在返回的对象上调用background.js 里面的函数
bg.start()
