let ArrayPrototype = Array.prototype;
let ArrayMethodForNeedRewrite = [
  "push",
  "pop",
  "shift",
  "unshift",
  "splice",
  "sort",
  "reverse",
];
let ExpandArrayObject = {};
ArrayMethodForNeedRewrite.forEach(function (method) {
  def(ExpandArrayObject, method);
});
function def(object, method) {
  Object.defineProperty(object, method, {
    // 可枚举
    enumerable: true,
    // 可遍历
    configurable: true,
    value: function (...args) {
      console.log(`正在使用 ${method} 方法操作数组`);
      return Array.prototype[method].apply(this, args);
    },
  });
}
let array = [1, 2, 3, 4, 5];
array.__proto__ = ExpandArrayObject;
console.log("修改前的数组", array);
array.push(6, 7, 8, 9, 10);
console.log("修改后的数组", array);
