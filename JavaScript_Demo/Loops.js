//三种方式：while，for，for ... of

//while：次数未知，适用于函数调用
console.log("==while loops==");
const names = ["lala", "hehe", "vuvu"];
let index = 0;
while (index < names.length) {
    const name = names[index];
    console.log(name);
    index++;
}

//for：次数已知
console.log("==for loops==");
for (let index = 0; index < names.length; index++) {
    const element = names[index];
    console.log(element);
}

//for...of：适用于数组和数据集合
console.log("==for...of loops==");
for (let name of names) {
    console.log(name);
}

//for...in: 适用于Json，迭代键值对
console.log("===for...in===");
let data = { name: "laha", age: 18, sex: "男" };
let txt = "";
for (let x in data) {
    txt += data[x] + "";
}
console.log(txt);
