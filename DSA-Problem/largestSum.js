//[1,2,3,4,3,5,4,6,7,8] => Total elements = 10
// count largest sum of consecutive Digits
// num = 4
// sum = 25

//conditions
// num > array -> error message
// 10 - 4 + 1 => 7 (outer loop no. of times)

function findLargestSum(array, num) {
    let max = 0;
    for (let i = 0; i < array.length - num + 1; i++) {
        let temp = 0;
        for (let j = 0; j < num; j++) {
            temp += array[i + j]
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}

let array = [1, 2, 3, 4, 3, 5, 4, 6, 7, 8]

console.log(findLargestSum(array, 3))