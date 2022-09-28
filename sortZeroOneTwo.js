function sort(arr, n){
    let start = 0;
    let mid = 0;
    let end = n-1;

    while(mid <= end){
        if(arr[mid] == 0){
            [arr[start], arr[mid]] = [arr[mid], arr[start]]
            mid++;
            start++;
        } else if(arr[mid] == 1){
            mid++;
        } else{
            [arr[mid], arr[end]] = [arr[end], arr[mid]]
            end--;
        }
    }
    return arr;
}

let arr = [1,1,1,2,0,0,0]
let n = arr.length;

console.log(sort(arr, n))