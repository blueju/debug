var str = "sfsf4dg3df5gdfg";

const newStr = Array.from(str).reduce((pre, cur, index) => {
  if (Number(cur) !== Number(cur)) {
    return pre + cur;
  } else {
    return pre;
  }
}, "");

console.log(newStr);
