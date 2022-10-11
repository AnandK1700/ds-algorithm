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
        return this.top == 0;
    }

    pop(){
        if(this.isEmpty()){
            throw new Error("Stack Underflow")
        }
        
        this.top--;
        return this.data.pop();
    }

    peek(){
        if(this.isEmpty()){
            return null;
        }
        return this.data[this.top-1];
    }

    print(){
        let index = this.top - 1;

        while(index >= 0){
            console.log(this.data[index])
            index--;
        }
    }
}

const stack = new Stack();
stack.push(100);
stack.push(200);
stack.push(300);
stack.push(400);
stack.push(700);
stack.push(600);
stack.pop();
console.log(stack.pop());
console.log(stack.peek());
//console.log("length of stack", stack.data.length);
//console.log("top value of the stack", stack.data[stack.top-1]);
//console.log("top index of stack", stack.top);
//console.log(stack.isEmpty());
stack.print();