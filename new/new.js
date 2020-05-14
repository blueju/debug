function myNew(fn) {
  let obj = new Object();
  obj.__proto__ = fn.prototype;

  let args = Array.prototype.slice.call(arguments, 1);
  console.log(args);

  let res = fn.call(obj, args);
  return typeof res === "object" ? res : obj;
}
// function objectFactory() {
//   var obj = new Object(),
//     Constructor = Array.prototype.shift.call(arguments);
//   console.log(Constructor);
//   obj.__proto__ = Constructor.prototype;
//   var ret = Constructor.apply(obj, arguments);
//   return typeof ret === "object" ? ret : obj;
// } 

function Person(name) {
  this.name = name;
  return {
    a: "a"
  };
}
// let tom = new Person("tom");
// console.log(tom);
let jerry = myNew(Person, "jerry");
console.log(jerry);
