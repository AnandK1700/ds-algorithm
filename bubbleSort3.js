// print 1 to 100 in decreasing order

function bubbleSort(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        let isSwapped = false;
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j] < arr[j+1])
            {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                isSwapped = true;
            }
        }
        if(!isSwapped)
        {
            break;
        }
    }
    return arr;
}

let arr = [5,2,3,6,1,9,7]

console.log(bubbleSort(arr));