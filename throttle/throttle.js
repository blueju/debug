/**
 * throttle
 * 节流
 * 规定一个时间n，n秒内，将触发的事件合并为一次并执行。
 */

//  时间戳版
function throttleForTimestamp(fn, time) {
    let lasteTime = 0
    let newArgs = Array.prototype.slice.call(arguments, 2)
    return function (...ar) {
        if (new Date().getTime() - lasteTime > time) {
            lasteTime = new Date().getTime()
            fn.call(fn, ...newArgs)
        }
    }
}

//  定时器版
function throttleForSetTimeout(fn, time) {
    let timer = 0
    let newArgs = Array.prototype.slice.call(arguments, 2)
    return function (e) {
        if (timer === 0) {
            fn.call(fn, ...newArgs)
            timer = false
            return
        }
        if (timer) return
        timer = setTimeout(() => {
            fn.call(fn, ...newArgs)
            clearTimeout(timer)
        }, time);
    }
}

function handle(p1, p2, p3) {
    console.log(Math.random());
    console.log(p1, p2, p3);
    console.log(this);
}

window.addEventListener('mousemove', throttleForTimestamp(handle, 1000, 1, 2, 3));
// window.addEventListener('mousemove', throttleForSetTimeout(handle, 1000, 1, 2, 3));