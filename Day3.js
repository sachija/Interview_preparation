// what is promise chaining explain with the help of example

let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(5);
    }, 3 * 1000); // (*)
});
p.then((result) => { //(**)
    console.log(result); // 5
    return result * 2;
}).then((result) => { //(***)
    console.log(result); // 10
    return result * 3;
}).then((result) => {
    console.log(result); // 30
    return result * 4;
}).then((result) => {
    console.log(result); // 120
    return result * 5;
});