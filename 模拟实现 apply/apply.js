/**
 * 模拟实现 apply
 *
 * @param {*} context 手动指定的this上下文
 *
 * 注意点：
 * 1. apply 的传参形式是数组
 * 2. 直接执行函数
 */
Function.prototype.apply2 = function (context) {
  let fn = this;
  let args = Array.from(arguments).slice(-1)[0];
  console.log(...args);
  return fn.call(context, ...args);
};

/**
 * test start by native
 */
let str = "good";
console.log(Object.prototype.toString.apply2(str, [1, 2, 3]));
