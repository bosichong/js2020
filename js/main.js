// alert('hello');
// 使用 window.alert() 弹出警告框。
// 使用 document.write() 方法将内容写到 HTML 文档中。
// 使用 innerHTML 写入到 HTML 元素。
// 使用 console.log() 写入到浏览器的控制台。
// document.write("<p id='pa'>test</p>"); //写入一段HTML代码
// document.getElementById("pa").innerHTML = Date(); //修改ID=pa的HTML内容
console.log("这是一个快速学习JavaScript的学习笔记"); //控制态输出
// 导航
document.getElementById("lt").innerHTML = '<ul>'+'<li><a href="#m1">JavaScript简介</a>' +
    '<li><a href="#m2">JavaScript开发环境</a>'+
    '</ul>';


//正文
document.getElementById("rt").innerHTML = '<h1>这是一个快速学习JavaScript的学习笔记</h1>' +
    '</br>' +
    '<h2 id="m1">JavaScript 是脚本语言</h2>' +
    '<p>JavaScript 是一种轻量级的编程语言。\
    <p>JavaScript 是可插入 HTML 页面的编程代码。\
    <p>JavaScript 插入 HTML 页面后，可由所有的现代浏览器执行。\
    <p>JavaScript 很容易学习。' +
    '<h2 id="m2">JavaScript开发环境</h2>' +
    '<p>以前我在网上看到一些初级编程的教程，经常有人写到：新手敲代码要用记事本手打，这样学习印象深刻！' +
    '<p>用记事本敲代码真的能是人印象深刻？但是我想愉快的学习不可以吗？答案当然是True了。' +
    "<p>个人目前认为最好用的JavaScript IDE 就是：Visual Studio Code，简称VS code"+
    wrmk('![其实这不是站长的本人的照片](./img/Snip20191207_2.png)');











/**
 * JS 解析Markdown文本
 * @param {*} markdownstr Markdown文本
 */
function wrmk(markdownstr) {
    // 撰写Markdown文档
    return marked(markdownstr);
}