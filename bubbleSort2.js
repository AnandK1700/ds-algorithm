let arr = ["India" , "Australia" , "China" , "Russia" , "Brazil" , "Japan"]

function bubbleSort(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        isSwapped = false; 

        for(let j=0;j<arr.length-i-1;j++)
        {
            if(arr[j].localeCompare(arr[j+1]) > 0)
            {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                isSwapped = true;
            }
        }
        if(!isSwapped) break;
    }
    return arr;
}

console.log(bubbleSort(arr))