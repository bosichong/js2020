/**
 * 
 * 用来测试的js文件
 */


//  alert('test');

document.querySelector("div").classList.add('aa');

const NB998 = 'nb998';

var mf = function myFunction(p1, p2) {
    return p1 * p2;              // 该函数返回 p1 和 p2 的乘积
}
document.querySelector("div").textContent = mf(6,2);//12

//这是一个匿名函数
//匿名函数可以用来命名空间，避免变量污染。
(function(){console.log('匿名函数写法1')}());
//推荐第二种方法。
(function(s){console.log(s)})('匿名函数写法2');


//简书上一篇不错的JavaScript闭包的文章
//https://www.jianshu.com/p/80fb145d57d7
//闭包1
var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();
 
add();
add();
console.log(add());//=>3


//闭包2
;(function(){
    var a=1;
    var addOne=function(x){
        return x+a;
    }
    window.addOne=addOne;
})()
console.log(addOne(2));  // 3
