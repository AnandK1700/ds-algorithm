var mergeAlternately = function(word1, word2) {
    let i = 0, j = 0, k = 0;
    let output = [];

    while(i < word1.length && j < word2.length){
        output[k++] = word1[i++] + word2[j++];
    }
    while(i < word1.length){
        output[k++] = word1[i++]
    }
    while(j < word2.length){
        output[k++] = word2[j++]
    }
   return output.join("");
};

function main(){
    //let word1 = readline().trim();
    //let word2 = readline().trim();
    let word1 = "abchsbsysfg";
    let word2 = "defgh";
    //word1.split('');
    //word2.split('');
    console.log(mergeAlternately(word1, word2));
}
 
main();