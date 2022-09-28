function missingNum(arr, n){

    let total = ((n+1) * (n+2)/2);
    for(let i=0;i<n;i++){
        total = total - arr[i]
    }
    return total;
}
let arr = [1,2,7,3,6,5,8]

console.log(missingNum(arr, arr.length));