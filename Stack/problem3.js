//Valid Parenthesis using recursion

class Stack{
    constructor(){
        this.data = [];
        this.top = 0;
    }

    push(value){
        this.data[this.top] = value;
        this.top++;
    }

    pop(){
        if(this.isEmpty()){
            throw new Error("Stack Underflow")
        }
        this.top--;
        return this.data.pop();
    }

    isEmpty(){
        return this.top == 0;
    }

    isOpening(value){
        const opens = ["[", "{", "("];
        return opens.indexOf(value) > -1;
    }

    isClosing(value){
        const closing = ["]", "}", ")"];
        return closing.indexOf(value) > -1;
    }

    matches(open, close){
        const matchTable = {
            "(" : ")",
            "{" : "}",
            "[" : "]"
        };
        return close === matchTable[open];
    }

}

function checkParenthesis(str){
    const stack = new Stack();
    for(const char of str){
        if(stack.isOpening(char)){
            stack.push(char);
        } else if(stack.isClosing(char)){
            const open = stack.pop();
            const close = char;
            if(!stack.matches(open, close)){
                return false;
            }
        }
    }
    return stack.isEmpty();
}

console.log(checkParenthesis(""));