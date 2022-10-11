//program to reverse the stack using recursion.

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

    insertElementAtBottom(value){
        if(this.isEmpty()){
            this.push(value);
            return;
        }
        const temp = this.peek();
        this.pop();
        this.insertElementAtBottom(value);
        this.push(temp);
        return;
    }

    reverse(){
        if(!this.isEmpty()){
            const temp = this.peek();
            this.pop();
            this.reverse();
            this.insertElementAtBottom(temp);
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

stack.push(2);
stack.push(5);
stack.push(7);
stack.push(3);
stack.push(1);

stack.print();
stack.reverse();
console.log("After reversing the Stack -------->")
stack.print();


