//函数：执行特定功能的代码块，可作为对象
//匿名函数：特例

//example
function sayHello(param) {
    console.log(param + " say: hello");
}

sayHello("haha");

//箭头函数：=>，改变箭头函数中this处理上下文方式，支持隐式返回值，类似lambda函数
//this上下文，继承于父级函数

//定时器
//settimeout(执行函数, 时间间隔(毫秒级)); 该函数在页面中只执行一次，若进行刷新会再次执行
// setTimeout(() => {
//     console.log("object");
// }, 2000);
// setTimeout(function () {
//     console.log("123");
// }, 3000);

// //setInterval(执行函数, 时间间隔)，该函数会持续执行
// setInterval(() => {
//     console.log("setInterval...");
// }, 2000);

//清除定时器
//clearTimeout(定时器对象);

