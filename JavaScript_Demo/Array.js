//数组及其操作

//数组可以包含任意数据类型，通过索引访问
//获取长度
let arr_1 = [1, 2, 3.14, 'hello', null, true];
console.log("长度是：" + arr_1.length);
//给length赋新值会使得数组有大小变化
arr_1.length = 8;
console.log("长度赋新值为8后：" + arr_1);
arr_1.length = 3;
console.log("长度赋值为3后：" + arr_1);
//数组可根据索引进行值的修改，但不建议使用
arr_1[1] = 8;
console.log("将1号位设置为8后" + arr_1);
//常用函数
//indexof: 索引指定元素
//slice： 截取子串，返回新数组，包前不包后；无参数则为复制
//push和pop： 追加和删除最后一个元素；空数组pop返回undefined
//unshift和shift： 在数组头部添加元素，使用unshift(); 删除头部第一个元素用shift()
//sort：排序; 按照字符编码顺序排序
//reverse：数组反转
//splice(开始位置，个数，添加元素)： 从指定位置开始删除若干元素，然后从该位置添加元素/也可不添加
//concat： 数组连接，返回新数组；不改变当前数组
//join：将数组中每个元素用指定的符号连接起来

//定义
let arr1 = [];
let arr2 = Array(5);
console.log(arr1);
console.log(arr2);
