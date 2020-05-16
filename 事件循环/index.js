/**
 * 字节跳动面试题
 */

async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
}

console.log("script start");

setTimeout(function () {
  console.log("setTimeout");
}, 0);

async1();

new Promise(function (resolve) {
  console.log("promise1");
  resolve();
})
  .then(function () {
    console.log("promise1 then");
    return "promise1 end";
  })
  .then(console.log)
  .then(console.log);

console.log("script end");

/**
 * 我现在的答案：2020年5月15日 星期五
 * script start
 * async1 start
 * async2
 * promise1
 * script end
 * async1 end
 * promise1 then
 * promise1 end
 * undefined
 * setTimeout
 */

/**
 * 浏览器端的运行结果：
 * script start
 * async1 start
 * async2
 * promise1
 * script end
 * 
 * async1 end
 * promise1 then
 * promise1 end
 * undefined
 * setTimeout
 */

/**
 * Node端的运行结果：
 * script start
 * async1 start
 * async2
 * promise1
 * script end
 * 
 * promise1 then
 * promise1 end
 * async1 end
 * undefined
 * setTimeout
 */
