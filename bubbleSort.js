// To find the Kth largest element in an array, we can use bubble sort.

function bubbleSort(arr, k)
{
    for(let i=0;i<arr.length-1;i++)
    {
        let isSwapped = false;

        for(let j=0;j<arr.length-i-1;j++)
        {
            if(arr[j] > arr[j+1])
            {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                isSwapped = true;
            }
        }
        if(!isSwapped){
            break;
        }
    }
    return arr;
}

let arr = [5,4,3,2,1,6]
let k = 3;
let output = bubbleSort(arr, k) 
console.log(output)
console.log(output[arr.length-k]);  //kth largest element
console.log(output[k-1]);           //kth smallest element