let arr = ["India" , "Australia" , "China" , "Russia" , "Brazil" , "Japan"]

function selectionSort(arr)
{
    for(let i=0;i<arr.length-1;i++)
    {
        let minimumIndex = i;
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[j].localeCompare(arr[minimumIndex]) < 0)
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

console.log(selectionSort(arr));