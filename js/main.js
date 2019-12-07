// alert('hello');

// 使用 window.alert() 弹出警告框。
// 使用 document.write() 方法将内容写到 HTML 文档中。
// 使用 innerHTML 写入到 HTML 元素。
// 使用 console.log() 写入到浏览器的控制台。




document.write("<p id='pa'>test</p>"); //写入一段HTML代码
document.getElementById("pa").innerHTML = Date(); //修改ID=pa的HTML内容
document.write('<h1>这是一个快速学习JavaScript的学习笔记</h1>');
console.log("这是一个控制台输出"); //控制态输出

wrbr();
wrh2('JavaScript 是脚本语言');
// \可以用来在字符串中进行换行连接
document.write('<p>JavaScript 是一种轻量级的编程语言。\
<p>JavaScript 是可插入 HTML 页面的编程代码。\
<p>JavaScript 插入 HTML 页面后，可由所有的现代浏览器执行。\
<p>JavaScript 很容易学习。');

wrbr();

wrh2('JavaScript开发环境')
wrp('以前我在网上看到一些初级编程的教程，经常有人写到：新手敲代码要用记事本手打，这样学习印象深刻！')
wrp('用记事本敲代码真的能是人印象深刻？但是我想愉快的学习不可以吗？答案当然是True了。')

wrp("个人目前认为最好用的JavaScript IDE 就是：Visual Studio Code，简称VS code")









/**
 * <h2>str</h2>
 * @param {} str 内容
 */
function wrh2(str) {
    var s = '<h2>' + str + '</h2>';
    document.write(s)
}

/**
 * </br>
 * HTML换行
 */
function wrbr() {
    //写入换行
    document.write('</br>')
}

/**
 * <p>str</p>
 * @param {} str 内容
 */
function wrp(str) {
    //写入<p>
    document.write('<p>' + str)
}

/**
 * JS 解析Markdown文本
 * @param {*} markdownstr Markdown文本
 */
function wrmk(markdownstr) {
    // 撰写Markdown文档
    document.write(marked(markdownstr));
}