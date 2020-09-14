# Welcome to GitHub Desktop!

This is your README. READMEs are where you can communicate what your project is and how to use it.

Write your name on line 6, save it, and then head back to GitHub Desktop.

开发需求：
当你在进行某些需要频繁刷新网页来获取数据的工作时，频繁的无意义的刷新网页，将让你感到疲倦，解放你的双手，把工作的重心放在业务上是非常重要的。现在的情况是，有一个审核系统，需要不断地刷新网页，来获取平台下发的量，如果没有刷新出量，就需要持续的F5来刷新，直到量出来为止。由于该系统采用了同步的刷新方式，在网页刷新后，js代码将会丢失，所以无法直接嵌入js代码执行，通过新增frame框架来进行加载，虽然能保证js代码不丢失，但是涉及到跨域问题，太过于麻烦！只有开发一款能在chrome浏览器长期执行的插件，这样才能保证可以重复使用；

开发思路：
通过对页面的观察发现，如果刷新到了数据，页面上会增加html的元素，把量渲染到页面上。当量出现的时候，会新增量的元素，且class属性是一致的，当刷新到没有量的情况，该页面不存在该class。所以我们只需要在刷新后对该页面进行获取dom对象，通过查找dom对象的class属性，如果找到了，就停止刷新，没找到，就持续刷新；

chrome插件开发

项目结构:
manifest.json // 插件必需的描述文件
content.js // 获取当前页面dom对象的脚本
background.js // 后台执行的js   
popup.html // 活动html页面
icon.png // 插件图标
    

