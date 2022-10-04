//is a object，包含时间和日期；1970.1.1以后的时间戳，0代表一月，
const now = new Date();
console.log(now);

//set 方法
console.log("-- set方法 --");
now.setFullYear(2020); //设置年
now.setMonth(3); //设置月，0开始
now.setDate(5); //设置天

now.setHours(5); //设置小时，24制，格林威治时间
now.setMinutes(24); //设置分钟
now.setSeconds(34); //设置秒
console.log(now);

//get 方法
console.log("-- get方法 --");
console.log(now.getMonth());
console.log(now.getTime());     //时间戳，从1970.1.1开始，毫秒数
console.log(now.getDay());      //Sunday = 0