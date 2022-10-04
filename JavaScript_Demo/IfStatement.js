//逻辑符
// == 会类型转换 ， ===不会类型转换
//！= 不查看类型 ， ！==查看类型
//三元运算符：xx ? xx : ss
const status = 200;
if (status === 200) {
    console.log("ok");
} else {
    console.log("error");
}

switch (status) {
    case 200:
        console.log("ok");
        break;
    case 300:
        console.log("error");
    default:
        break;
}