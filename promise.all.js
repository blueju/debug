Promise.all = (array) => {
  let result = [];
  return new Promise((resolve, reject) => {
    for (let i = 0; i < array.length; i++) {
      Promise.resolve(array[i])
        .then((res) => {
          result.push(res);
          if (i === array.length - 1) {
            return resolve(result);
          }
        })
        .catch((err) => {
          return reject(err);
        });
      //   array[i]
      //     .then((res) => {
      //       result.push(res);
      //       if (i === array.length - 1) {
      //         return resolve(result);
      //       }
      //     })
      //     .catch((err) => {
      //       return reject(err);
      //     });
    }
  });
};

/**
 *
 */
// var p1 = Promise.resolve(3);
// var p2 = 1337;
// var p3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "foo");
// });

// Promise.all([p1, p2, p3]).then((values) => {
//   console.log(values); // [3, 1337, "foo"]
// });

/**
 *
 *
 */
var p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "one");
});
var p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "two");
});
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "three");
});
var p4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, "four");
});
var p5 = new Promise((resolve, reject) => {
  reject("reject");
});

Promise.all([p1, p2, p3, p4, p5]).then(
  (values) => {
    console.log(values);
  },
  (reason) => {
    console.log(reason);
  }
);
