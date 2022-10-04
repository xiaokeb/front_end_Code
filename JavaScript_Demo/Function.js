//函数：执行特定功能的代码块，可作为对象
//匿名函数：特例

//example
function sayHello(param) {
  console.log(param + " say: hello");
}

sayHello("haha");

//箭头函数：=>，改变箭头函数中this处理上下文方式，支持隐式返回值，类似lambda函数
//this上下文，继承于父级函数