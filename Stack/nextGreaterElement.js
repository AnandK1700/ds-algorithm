class Stack{
    constructor(){
        this.data = [];
        this.top = 0;
    }

    push(value){
        this.data[this.top] = value;
        this.top++;
    }

    isEmpty(){
        return this.top === 0;
    }

    peek(){
        return this.data[this.top - 1];
    }

    pop(){
        if(this.isEmpty()){
            throw new Error("Stack underflow");
        }
        this.top--;
        return this.data.pop();
    }
}

function nextGreaterArray(){
    let stack = new Stack();
    let nge = [];
    let n = arr.length;

    for(let i=2*n-1; i>=0; i--){
        while(!stack.isEmpty() && stack.peek() <= arr[Math.floor(i%n)]){
            stack.pop();
        }

        if(i < n){
            if(!stack.isEmpty()){
                nge[i] = stack.peek();
            }else{
                nge[i] = -1;
            }
        }
        stack.push(arr[Math.floor(i%n)]);
    }
    return nge;
}

let arr = [23, 3, 45, 78, 6, 12, 15, 9]

console.log(nextGreaterArray());