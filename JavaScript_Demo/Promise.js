//异步编程和promise
//多线程

//回调函数
function callback() {
    console.log("timeout");
}
// setTimeout(callback, 3000);

//难点:
//使用promise，Promise是一对象，成功用resolve，失败用reject
function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        //匿名函数
        setTimeout(resolve, ms); //若改为reject，则会被下面的catch捕获
    });
}

promiseTimeout(2000)
    .then(() => {
        console.log("done");
        return promiseTimeout(1000); //若添加return，则会执行下面的then方法
    })
    .then(() => {
        console.log("also done");
        return Promise.resolve(66); //成功情况下，输出前面then的所有内容，以及后面then的所传递的数据值
    })
    .then((resolve) => {
        console.log(resolve);
    })
    .catch(() => {
        console.log("error");
    });
