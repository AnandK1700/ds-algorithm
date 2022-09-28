//Given a sorted array. Your task is to reduce it such that, each element can appear maximum twice.

function reduceMaxTwice(arr, n){
    let j = 0;
    for(let i = 0 ; i < n ; i++){
         if(i < n-2 && arr[i] == arr[i+1] && arr[i] == arr[i+2])
            continue;

         else {
            arr[j++] = arr[i]
         }
    }

    for(let i = 0 ; i < j ; i++){
         console.log(arr[i], " ");
    }

    //return arr;
}

let arr = [1,2,2,3,3,3,4,4,6,6]
let n = arr.length;

console.log(reduceMaxTwice(arr, n));