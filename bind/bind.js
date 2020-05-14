/**
 * bind模拟实现
 *
 *
 */

/**
 * context 上下文
 *
 */
Function.prototype.bind2 = function (context) {
  console.log("arguments", arguments);
  let fn = this;
  let args = Array.prototype.slice.call(arguments, 1);
  console.log("args", ...args);
  return function () {
    // console.log(args.concat(Array.prototype.slice.call(arguments)));
    console.log(context);
    return fn.call(context, ...args);
  };
};

let str = "dawdwa";

// 原生
// let resFn = Object.prototype.toString.bind(str, [1, 2, 3]);
// console.log(resFn());

// 模拟实现
let resFn2 = Object.prototype.toString.bind2(str, [1, 2, 3]);
console.log(resFn2(4, 5, 6));
