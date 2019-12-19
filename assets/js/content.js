/**
 * 
 * 用来读取markdown内容并加载到页面中
 * 
 */

var conname = getQueryVariable('p'); //获得要加载Markdown文章的序列号。
if (conname == false) conname = 0;
var mkurl = './articles/' + conname + '.md'; //组装URL地址

// loadMarkdown(mkurl,'rt');//JS 原生AJAX加载.MD。
$(document).ready(function () {
    
    $.get(mkurl, function (data,status) {
        $("#rt").html(marked(data));//Markdown解析并加载日志
        //<!-- highlight.js AJAX加载后执行代码美化 -->
        hljs.initHighlighting.called = false;
        hljs.initHighlighting();
    });
});