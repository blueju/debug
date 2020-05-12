/**
 * throttle
 * 
 * 节流
 * 
 */

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

function handle(p1, p2, p3) {
    console.log(Math.random());
    console.log(p1, p2, p3);
    console.log(this);
}

window.addEventListener('mousemove', throttleForTimestamp(handle, 2000, 1, 2, 3));