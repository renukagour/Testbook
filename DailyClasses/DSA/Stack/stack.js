let stack=[];
function peek(){
    let n=stack.length;
    return stack[n-1];
}
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack);
console.log(peek());
console.log(stack[stack.length-1]);
stack.pop();
console.log(stack);

stack.push(40);
console.log(stack);
console.log(stack[stack.length-1]);
stack.pop();
console.log(stack);
