//数据类型和变量

//Number类型
var intnum = 124;
var floatnum = 1.34;
var sciencenum = 1.23e3;
var funum = -1;
var notnum = NaN;
var wuxiannum = Infinity;

//String类型，不可变
var strvar = 'abc';
var strvar1 = "xyz";
//多行字符串
let linesvar = `this
is a
string with few lines`;
console.log(linesvar);
console.log("================")
//模板字符串
let name = "xiaoming";
let age = 20;
let mes = "nihao, " + name +" age, " + age;
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
console.log("常用方法：");
console.log("转大写：" + strlen.toUpperCase());
console.log("转小写：" + strlen.toLowerCase());
console.log("搜索位置：" + strlen.indexOf('w'));
console.log("子串：" + strlen.substring(6));