
$(document).ready(function () {
    
});


/**
 * JS 解析Markdown文本
 * @param {*} markdownstr Markdown文本
 */
function wrmk(markdownstr) {
    // 撰写Markdown文档
    return marked(markdownstr);
}


/**
 * JS获取url参数
 * @param {*} variable 
 */
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);
}



/**
 * 加载Markdown文档并解析
 */
function loadMarkdown(url, id) {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp = new XMLHttpRequest();
    } else {
        // IE6, IE5 浏览器执行代码
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            // alert(document.getElementById(id));
            document.getElementById(id).innerHTML = wrmk(xmlhttp.responseText);
            // document.getElementById(id).innerHTML = "wrmk(xmlhttp.responseText)";
            //<!-- highlight.js AJAX加载后执行 -->
            hljs.initHighlighting.called = false;
            hljs.initHighlighting();
        }
    }

    xmlhttp.open("GET", url, true);
    xmlhttp.send();

}




/**
 * AJAX
 */
function loadHtml(url, id) {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp = new XMLHttpRequest();
    } else {
        // IE6, IE5 浏览器执行代码
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            // alert(xmlhttp.responseText)
            document.getElementById(id).innerHTML = xmlhttp.responseText;
        }
    }

    xmlhttp.open("GET", url, true);
    xmlhttp.send();

}