/**
 * debounce
 * 防抖
 * 
 * 在事件被触发n秒后，再去执行回调函数。
 * 如果n秒内该事件被重新触发，则重新计时。
 * 结果就是将频繁触发的事件合并为一次，且在最后执行。
 */

function debounce(fn, time) {
  let timer;
  let newArgs = Array.prototype.slice.apply(arguments, [2]);
  return function (e) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.call(fn, ...newArgs);
    }, time);
  };
}

function handle(p1, p2, p3) {
  console.log(Math.random());
  console.log(p1, p2, p3);
  console.log(this);
}

window.addEventListener("mousemove", debounce(handle, 1000, 1, 2, 3));
