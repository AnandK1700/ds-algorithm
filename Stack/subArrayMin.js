let arr = [3, 1, 2, 2]

function sumSubArrayMin(arr){
    let plei = ple(arr);
    let nlei = nle(arr);
    let n = arr.length;

    console.log(plei, nlei);

    let M = Math.pow(10, 9) + 7;

    let sum = 0;
    for(let i = 0;i < n; i++){
        sum = (sum + arr[i] *((nlei[i] - i) * (i - plei[i]))) % M;
    }
    return sum;
}

function nle(arr){
    let stack = [];
    let nleIndex = [];
    let n = arr.length;

    for(let i=n-1; i >= 0; i--){
        while(stack.length > 0 && stack[stack.length-1] > arr[i]){
            stack.pop();
        }

        if(i < n){
            if(stack.length > 0){
                nleIndex[i] = stack.length;
            } else{
                nleIndex[i] = n;
            }
        }
        stack.push(i)
    }
    return nleIndex;
}


function ple(arr){
    let stack = [];
    let nleIndex = [];
    let n = arr.length;

    for(let i=0; i <=n-1; i++){
        while(stack.length > 0 && stack[stack.length-1] >= arr[i]){
            stack.pop();
        }

        if(i < n){
            if(stack.length > 0){
                nleIndex[i] = stack.length;
            } else{
                nleIndex[i] = -1;
            }
        }
        stack.push(i)
    }
    return nleIndex;
}

console.log(sumSubArrayMin(arr));