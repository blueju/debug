function myNew(fn) {
  const obj = new Object();
  obj.__proto__ = fn.prototype;
  const res = fn.apply(obj, [...arguments].slice(1));
  return typeof res === "object" ? res : obj;
}

function myNew2(fn) {
  const obj = Object.create(fn.prototype);
  const res = fn.apply(obj, [...arguments].slice(1));
  return typeof res === "object" ? res : obj;
}

/* 以下是测试 */

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const mycar = myNew(Car, "Eagle", "Talon TSi", 1993);
const kenscar = myNew2(Car, "Nissan", "300ZX", 1992);
console.log(mycar);
console.log(kenscar);
