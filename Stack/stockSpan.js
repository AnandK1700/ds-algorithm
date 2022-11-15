function spanStock(prices){
    let stack = [];
    let n = prices.length;
    let output = [];
    stack.push(0);

    output[0] = 1;

    for(let i=1; i<n; i++){
        while(stack.length !== 0 && prices[stack[stack.length-1]] <= prices[i]){
            stack.pop();
        }

        output[i] = (stack.length == 0) ? (i+1) : (i - stack[stack.length-1]);

        stack.push(i)
    }
    return output;
}
let prices = [100, 80, 60, 70, 60, 75, 85]


console.log(spanStock(prices));