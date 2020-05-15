/**
 * 深拷贝
 * @param {*} target 需要拷贝的目标对象
 * @param {*} map 可选参数，默认值为空Map
 */
function deepClone(target, map = new Map()) {
  if (typeof target === "object" && target !== null) {
    let result = Array.isArray(target) ? [] : {};
    if (map.get(target)) {
      return map.get(target);
    }
    map.set(target, result);
    for (const key in target) {
      if (target.hasOwnProperty(key)) {
        result[key] = deepClone(target[key], map);
      }
    }
    return result;
  } else {
    return target;
  }
}
