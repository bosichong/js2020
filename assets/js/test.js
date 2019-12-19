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


//JavaScript对象
//定义对象
var p = {fname:"javascript",lname:"function"}
p.oname = "java";//对象添加属性
//forin 遍历对象属性。
for (k in p ){console.log(p[k]);}
delete p.oname;
console.log(p.oname);//undefined
p.f = function (s) { console.log(s)}//方法
p.f('定义对象中的方法。')

// 定义类
function Person(name,age){
    this.name = name;
    this.age = age;
}
var p1 = new Person("python",18);
//通过prototype添加属性和方法。
Person.prototype.where = 'china';
Person.prototype.sayHello = function() {alert(this.name+" hello "+this.where)}
// p1.sayHello();rt(p1 === Person.coun);







