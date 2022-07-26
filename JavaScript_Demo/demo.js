//数据类型和变量

//Number类型
var intnum = 124;
var floatnum = 1.34;
var sciencenum = 1.23e3;
var funum = -1;
var notnum = NaN; //检测尝试转换为数字的东西是否为有效数字
var wuxiannum = Infinity;

//String类型，不可变
var strvar = "abc";
var strvar1 = "xyz";
//多行字符串
let linesvar = `this
is a
string with few lines`;
console.log(linesvar);
console.log("================");
//模板字符串
let name = "xiaoming";
let age = 20;
let mes = "nihao, " + name + " age, " + age;
console.log(mes);
console.log("===============");
//ES6支持
let mes1 = `nihao, ${name} , age ${age}`;
console.log(mes1);
console.log("================");
//操作字符串
var strlen = "hello world";
console.log(strlen.length);
//获取指定位置字符串
console.log(strlen[0]);
console.log(strlen[6]);
console.log("===============");
console.log("常用方法：");
console.log("下标为3的字符: " + strlen.charAt(3));
console.log("转大写：" + strlen.toUpperCase());
console.log("转小写：" + strlen.toLowerCase());
console.log("搜索位置：" + strlen.indexOf("w"));
console.log("截取子串：" + strlen.substring(6));
//split方法，字符串会转换为数组对象
console.log("分割(单词拆分为字母数组): " + strlen.split(""));
//slice()，使用负数为从后往前切割
console.log("slice分割: " + strlen.slice(3, 7));
console.log("替换为1234: " + strlen.replace(strlen, "1234"));

//变量
//声明方式
var v1 = 1; //有函数作用域的变量声明，可变。全局可用
let v2 = 2; //块作用域，变量只能在声明后，作用域内使用，可变，循环中使用
const v3 = 3; //块作用域，声明后使用。可设置不重置。表示常量，不可变，default默认使用

//检测类型：
// typeof：typeof（变量/值），返回结果即为数据类型，array返回object，函数也是
// instanceof：是否从特定数据类型的构造函数中创造，该类型会有实例构造函数生成，类似new xxx()形式
console.log("类型检测: ");
let x = 0 == ""; //会强制转换为同一类型
console.log(x);
let y = 0 === ""; //不强制转换类型
console.log(y);

//prompt(title, [default]): 显示信息，要求用户输入文本，点击确定返回文本，或点击取消/返回返回null
// title: 提示信息
// default: 可选参数，指定input框的初始值/用户输入的值
