let array = [6, 1, 2, 7, 9, 3, 4, 5, 10, 8];

function quickSort(start, end) {
  if (start > end) {
    return;
  }
  let base = array[start];
  let left = start;
  let right = end;
  while (left !== right) {
    while (right > left && array[right] >= base) {
      right--;
    }
    while (right > left && array[left] <= base) {
      left++;
    }
    // 排除 left 等于 right 的情况
    if (right > left) {
      // 交换
      let temp = array[left];
      array[left] = array[right];
      array[right] = temp;
    }
  }
  array[start] = array[left];
  array[left] = base;
  // 左
  quickSort(start, left - 1);
  // 右
  quickSort(left + 1, end);
}

quickSort(0, array.length - 1);
console.log(array.toString());