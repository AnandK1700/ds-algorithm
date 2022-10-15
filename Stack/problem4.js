//sort the elements of stack using recursion

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

    peek(){
        if(this.isEmpty()){
            return null;
        }
        return this.data[this.top - 1];
    }

    pop(){
        if(this.isEmpty()){
            throw new Error("Stack Underflow");
        }
        this.top--;
        return this.data.pop();
    }

    insert(value){
        if(this.isEmpty() || value > this.peek()){
            this.push(value);
            return;
        }
        const temp = this.peek();
        this.pop();
        this.insert(value);
        this.push(temp);
    }
    sort(){
        if(!this.isEmpty()){
            const temp = this.peek();
            this.pop();
            this.sort();

            this.insert(temp);
        }
    }

    print(){
        let index = this.top - 1;
        while(index >= 0){
            console.log(this.data[index]);
            index--;
        }
    }


}

let stack = new Stack();
stack.push(34);
stack.push(56);
stack.push(23);
stack.push(-2);
stack.push(-4);
stack.push(76);

console.log("Before sorting the elements------------->");
stack.print();

stack.sort();

console.log("After sorting the elements------------->");
stack.print();