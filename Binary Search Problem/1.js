/**
 * Problem statement 1:
   You are Given a series of positive integer numbers in the form of a sorted array as
   Ai where i is the index. N is the positive number which you have to check in the
   given array Ai whether the given N is duplicate in the Array or not. If it is duplicate
   output as “FALSE” if it is non duplicate output as “TRUE”.
   Note: Use Binary search algorithm to find the N.

 */

var isDuplicate = function (arr, target) {
    if (arr.length == 0 || arr.length == 1) return true;

    let left = 0, right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (target === arr[mid]) {
            if (arr[mid] === arr[mid + 1] || arr[mid] === arr[mid - 1]) return false;
            return true;
        } else if (target < arr[mid]) right = mid - 1;
        else left = mid + 1;
    }
}

let arr = [1, 3, 5, 5, 7, 7, 8, 9]

let result = isDuplicate(arr, 8);
console.log(result)