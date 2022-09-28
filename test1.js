//let arr = readline().split(" ").map(x => parseInt(x)).slice(0, 3);
//maths = arr[0], physics = arr[1], chemistry = arr[2]
function admissionEligibility(arr)
{
    //for(let i=0;i<arr.length;i++){
    let i = 0;
    if(arr[i] >= 65 && arr[i+1] >= 55 || arr[i] >= 65 && arr[i+2] >= 50 || arr[i+1] >= 55 && arr[i+2] >= 50){
        if (arr[i] + arr[i+1] + arr[i+2] >= 195 || arr[i] + arr[i+1] >= 140) {
            return "Eligible"
        } else {
            return "Not eligible"
        }
    } else {
        return "Not eligible"
    } 
}
//}

let arr = [70, 55, 45]
console.log(admissionEligibility(arr));