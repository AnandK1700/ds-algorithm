function removeDuplicates(s){
    if(s.length == 1){
        return s;
    }

    let st = [];

    for(let char of s){
            if(st.length > 0 && st[st.length-1] === char){
                st.pop();
            } else{
                st.push(char)
            }
    }
    return st.join("");
}
let s = "abbaca"
console.log(removeDuplicates(s));