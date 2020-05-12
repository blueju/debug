/**
 * LeetCode
 * 
 * https://leetcode-cn.com/problems/sort-colors/
 * 
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  quickSort(nums, 0, nums.length - 1);
};

function quickSort(data, start, end) {
  if (start >= end) {
    return;
  }
  let base = data[start];
  let left = start;
  let right = end;
  while (left !== right) {
    while (right > left && data[right] >= base) {
      right--;
    }
    while (right > left && data[left] <= base) {
      left++;
    }
    let temp = data[left];
    data[left] = data[right];
    data[right] = temp;
  }
  data[start] = data[left];
  data[left] = base;
  quickSort(data, start, left - 1);
  quickSort(data, left + 1, end);
}

let nums = [2, 0, 2, 1, 1, 0];
// let nums = [6, 1, 2, 7, 9, 3, 4, 5, 10, 8];
sortColors(nums);
console.log(nums);
