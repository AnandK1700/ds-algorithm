//Element insert at bottom using recursion

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
        return this.data[this.top-1];
    }

    pop(){
        if(this.isEmpty()){
            throw new Error("Stack Underflow")
        }
        this.top--;
        return this.data.pop();
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

    print(){
        let index = this.top - 1;
        while(index >= 0){
            console.log(this.data[index]);
            index--;
        }
    }
}

let stack = new Stack();

stack.push(100);
stack.push(400);
stack.push(600);
stack.push(200);
stack.push(800);
stack.push(500);

stack.insertElementAtBottom(567);
stack.print();
