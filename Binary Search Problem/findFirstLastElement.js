/**
 * Find First and Last Position of Element in Sorted Array
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    if (nums.length === 0) return [-1, -1];

    let left = 0, right = nums.length - 1;
    let lo = -1, hi = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (target <= nums[mid]) right = mid - 1
        else left = mid + 1
    }
    lo = left;

    left = 0, right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (target < nums[mid]) right = mid - 1
        else left = mid + 1
    }
    hi = right
    return lo <= right ? [lo, hi] : [-1, -1]

};
let nums = [5, 7, 7, 8, 8, 10]
console.log(searchRange(nums, 8))