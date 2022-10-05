//object: 属性和行为，无序键值对的集合

//格式: 创建和定义对象，也可使用new 构造函数()进行创建
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