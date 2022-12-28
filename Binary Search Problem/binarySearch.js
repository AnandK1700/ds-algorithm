/**
 * ######### Code for Iterative and recursive implementation of Binary Search Algorithm ########
 
 * In Binary Search, Array must be in sorted order.
 * let's assume we have an array = [1,3,4,6,7,9,12,14,17]
 * need to find key = 12 in given array
 */

/**function iterativeBinarySearch(array, key) {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (key === array[middle]) {
            return middle;
        } else if (key > array[middle]) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return "key not found in given array";
}

let array = [1, 3, 4, 6, 7, 9, 12, 14, 17]

let result = iterativeBinarySearch(array, 11)

console.log(result);*/


function recursiveBinarySearch(array, key, start, end) {

    if (start > end) {
        return -1;
    }

    let middle = Math.floor((start + end) / 2);

    if (key === array[middle]) {
        return middle;
    } else if (key > array[middle]) {
        return recursiveBinarySearch(array, key, middle + 1, end)
    } else {
        return recursiveBinarySearch(array, key, start, middle - 1)
    }
}

let array = [1, 3, 4, 6, 7, 9, 12, 14, 17]

let result = recursiveBinarySearch(array, 17, 0, array.length - 1)

console.log(result)

