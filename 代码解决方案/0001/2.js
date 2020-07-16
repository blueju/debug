var str = "sfsf4dg3df5gdfg";

// 方案一
const newStr = Array.from(str).reduce((pre, cur, index) => {
  if (Number(cur) !== Number(cur)) {
    // 英文字母
    return pre + cur;
  } else {
    // 数字
    return pre + `[${cur}]`;
  }
}, "");
console.log(newStr);

// 方案二
const newStr2 = str.replace(/[1-9]/g, (replacement) => {
  return `[${replacement}]`
})
console.log(newStr2);
