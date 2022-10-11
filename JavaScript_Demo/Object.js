//object: 属性和行为，无序键值对的集合，属性必须时字符串/symbol类型，值可以时任意类型

//格式: 创建和定义对象，也可使用new 构造函数()进行创建
//若直接定义为 '{}', 则为字面量
//使用delete 可以删除不需要的属性
//若使用多个单词组成的属性名，则需要引号包起来
//属性名可以使用[]进行指定
//计算属性: ['属性名'], 属性名从之前定义的变量中获得，获得/输入什么，该属性名就是什么; 也可以在方括号内使用更复杂的表达式
//若属性和值同名时，可以仅使用属性名即可
//判断一个属性是否存在于某对象，使用in操作符，不存在得到undefined
//遍历对象: for(let key in obj)
const book = {
    title: "1991",
    auther: "xxx",
    isavailable: false,

    checkIn: function () {
        this.isavailable = true;
    },

    checkOut: function () {
        this.isavailable = false;
    },
};
console.log(typeof book);
