/**
 * 模拟实现 bind
 * 
 * @param {*} context 手动指定的this上下文
 * 
 * 注意：
 * 1. bind 传参方式是数组
 * 2. 返回一个函数，需要我们自己手动执行
 */
Function.prototype.bind2 = function (context) {
  let fn = this;
  let bindArgs = Array.prototype.slice.call(arguments, 1);
  // 或
  // let bindArgs = Array.from(arguments).slice(-1)[0];
  return function () {
    return fn.call(context, ...bindArgs);
  };
};

let str = "Tom and Jerry";

// 原生
let resultByBind = Object.prototype.toString.bind(str, [1, 2, 3])();
console.log(resultByBind);

// 模拟实现
let resultByBind2 = Object.prototype.toString.bind2(str, [1, 2, 3])();
console.log(resultByBind2);
