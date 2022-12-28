// Count Unique Numbers
//  i j
// [1,1,2,2,3,4,4,5,6,7,8,8]
// output -> 8
// i=0, j=1
//array[i] !==array[j]
// 1.  i++;
// 2.  array[i] = array[j]   

function countUniqueNumber(array) {
    if (array.length > 0) {
        let i = 0;
        for (let j = 1; j < array.length; j++) {
            if (array[i] !== array[j]) {
                i++;
                array[i] = array[j]
            }
        }
        return i + 1;
    } else {
        throw new Error("Array is Empty")
    }

}

let array = [1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8, 8, 9]

console.log(countUniqueNumber(array));