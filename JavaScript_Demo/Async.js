//异步，使用promise后使用，任何一个函数调用时返回promise，皆可使用async/await语法
//async: 使用时，说明函数其中有await关键词，剩余函数体可做任何事
//await: 操作完成时会暂停
function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        //匿名函数
        setTimeout(resolve, ms);
    });
}

//模拟调用服务器等，长时间运行的操作
async function longRunningOperation() {
    //logic
    return 66;
}

async function run() {
    //logic
    console.log("start");
    await promiseTimeout(3000); //若没有await，则在stop完了之后暂停

    const responce = await longRunningOperation(); //若没有await，则输出Promise{66}，非66
    console.log(responce);

    console.log("stop");
}

run();
