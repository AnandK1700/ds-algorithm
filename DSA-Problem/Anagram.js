//condition
//check length for both strings
//String 'hello'
//{h:1, e:1, l:2, o:1}


function isAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }
    let counter = {}
    for(let letter of str1){
        counter[letter] = (counter[letter] || 0) + 1;
        console.log(counter[letter])
    }
    //console.log(counter)
    for(let items of str2){
        if(!counter[items]){
            return false;
        }
        counter[items]--;
    }
    return true;
}

let str1 = "hello";
let str2 = "llleo";

console.log(isAnagram(str1, str2));

