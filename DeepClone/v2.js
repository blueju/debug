/**
 * 深拷贝
 * 未考虑循环引用
 * @param {*} target 需要拷贝的目标对象
 */
function deepClone(target) {
  // 此处需要考虑 typeof null 也等于 object 的情况
  if (typeof target === "object" && target !== null) {
    let result = Array.isArray(target) ? [] : {};
    for (const key in target) {
      if (target.hasOwnProperty(key)) {
        result[key] = deepClone(target[key]);
      }
    }
    return result;
  } else {
    return target;
  }
}

let one = {
  a: undefined,
  b: null,
  c: 1,
  d: [1, 2, 3],
  e: { a: 1, b: 2, c: 3 }
};

let two = deepClone(one);
console.log(two);
