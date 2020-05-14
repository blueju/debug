/**
 * 深拷贝
 * @param {*} target 需要拷贝的目标对象
 * @param {*} map 可选参数，默认值为空Map
 */
function deepClone(target, map = new Map()) {
  if (typeof target === "object" && target !== null) {
    let result = Array.isArray(target) ? [] : {};
    let map = new Map();
    if (map.get(target)) {
      return map.get(target);
    }
    for (const key in target) {
      if (target.hasOwnProperty(key)) {
        result[key] = deepClone(target[key]);
      }
    }
    map.set(target, result);
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
  e: { a: 1, b: 2, c: 3 },
};

let two = deepClone(one);
console.log(two);
