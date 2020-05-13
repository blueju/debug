/**
 * throttle
 * 
 * 节流
 * 
 */

//  时间戳版
function throttleForTimestamp(fn, time) {
    let lasteTime = 0
    let newArgs = Array.prototype.slice.call(arguments, 2)
    return function (e) {
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

// window.addEventListener('mousemove', throttleForTimestamp(handle, 2000, 1, 2, 3));
window.addEventListener('mousemove', throttleForSetTimeout(handle, 2000, 1, 2, 3));