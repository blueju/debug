let a = {
  b: 1,
  c: 2
};

let d = {
  e: 3,
  f: 4
};

let g = Object.assign({}, a, d);
let h = { ...a, ...d };
let i = Object.assign(a, d);

console.log(g, h, i);

a.b = "xxx";
d.e = "yyy";

console.log(g, h, i);
