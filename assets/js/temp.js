/**
 * 站点页面模板
 */

 // 左侧导航导航
// loadHtml('./templates/side.html','lt');//JavaScript原生AJAX

$(document).ready(function () {
    $("#lt").load("./templates/side.html", function (response, status, request) {
        if(status=="success")
            console.log("左侧导航加载成功！");
            
        
        
    });
});

