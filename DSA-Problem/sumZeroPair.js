//checking sum zero first pair in this array
// Input -> [-5,-4,-3,-2,0,2,4,6,8]
//Output -> [-4, 4]


// function sumPairZero(array){
//     for(let number of array){
//         for(let j=1; j<array.length; j++){
//             if(number + array[j] === 0){
//                 return [number, array[j]]
//             }
//         }
//     }
// }

// let array = [-5,-4,-3,-2,0,2,4,6,8]
// let result = sumPairZero(array);
// console.log(result);



// ANOTHER SOLUTION

function sumPairZero(array){

    let left = 0;
    let right = array.length - 1;

    while(left < right){

        let sum = array[left] + array[right]
        if(sum > 0)   right--;
        else if(sum < 0)  left++;
        else return [array[left], array[right]]
    }
}

let array = [-5,-4,-3,-2,0,2,4,6,8]
let result = sumPairZero(array);
console.log(result);