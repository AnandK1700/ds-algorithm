let arr=[{'name':'Ram','salary':100000},
         {'name':'Ramesh','salary':10000},
         {'name':'Rakesh','salary':500000},
         {'name':'Riya','salary':650000},
         {'name':'Rithik','salary':45000},
         {'name':'Ritesh','salary':230000}]

function nameBasedOnSalary(arr, k)
{
    for(let i=0;i<k;i++)
    {
        let isSwapped = false;
        for(let j=0;j<(arr.length-i-1);j++)
        {
            if(arr[j]['salary'] > arr[j+1]['salary'])
            {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isSwapped = true;
            }
        }
        if(!isSwapped) break;
    }
    return arr;
}
let k = 3;
let output = nameBasedOnSalary(arr, k)
console.log(output);

console.log(output[arr.length-k]['name'])