/**
 * leetcode
 * https://leetcode-cn.com/problems/search-in-rotated-sorted-array/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let length = nums.length;
  if (length === 0) {
    return -1;
  }
  if (length === 1) {
    return nums[0] === target ? 0 : -1;
  }
  let l = 0;
  let r = length - 1;
  while (l <= r) {
    let middle = (l + r) / 2;
    if (nums[middle] === target) {
      return middle;
    }
    if (nums[l] <= target && target <= nums[middle]) {
      r = middle;
    }
  }
};

/**
 * test start
 */
let nums = [4, 5, 6, 7, 0, 1, 2];
let target = 0;
console.log(search(nums, target));
