function selectionSort(arr)
{
    for(let i=0;i<arr.length-1;i++)
    {
        let minimumIndex = i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j] < arr[minimumIndex])
            {
                minimumIndex = j;
            }
        }
        if(minimumIndex != i)
        {
            [arr[minimumIndex], arr[i]] = [arr[i], arr[minimumIndex]]
        }
    }
    return arr;
}

let arr = [5,4,2,3,1,6]

console.log(selectionSort(arr))