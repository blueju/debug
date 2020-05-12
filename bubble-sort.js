/**
 * bubble sort
 *
 * 冒泡排序
 */

const content = require("./quick-sort")

console.log(content);


function bubbleSort(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
  }
}

let array = [6, 1, 2, 7, 9, 3, 4, 5, 10, 8];
bubbleSort(array);
console.log(array);
