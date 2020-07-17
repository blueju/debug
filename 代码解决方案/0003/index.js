// function sum(x, y) {
//     return x + y
// }

// function curry(fn) {
//     return fn(){

//     }
// }

// let add = curry(sum)

// // curry(add)

function add(x) {
    let sum = x;
    function resultFn(y) {
        sum += y;
        return resultFn;
    }
    resultFn.valueOf = function () {
        return sum;
    };
    return resultFn;
}

console.log(add(3, 5));

console.log(add(3)(5));