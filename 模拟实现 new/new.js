function myNew(fn) {
  let obj = new Object();
  obj.__proto__ = fn.prototype;
  let constructor = Array.prototype.shift.call(arguments);
  // let args = Array.prototype.slice.call(arguments, 1);
  console.log(arguments);
  let res = constructor.apply(obj, arguments);
  return typeof res === "object" ? res : obj;
}

// function objectFactory() {
//   var obj = new Object(),
//   Constructor = Array.prototype.shift.call(arguments);
//   console.log(Constructor);
//   obj.__proto__ = Constructor.prototype;
//   var ret = Constructor.apply(obj, arguments);
//   return typeof ret === "object" ? ret : obj;
// }

function Person(name) {
  this.name = name;
  // return {
  //   name: "Tom"
  // };
}
// let tom = new Person("tom");
// console.log(tom);
let Jerry = myNew(Person, "Jerry");
console.log(Jerry);
