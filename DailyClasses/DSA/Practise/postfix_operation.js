function evaluatePostfix(exp) {
    let stack = [];
    for (let i = 0; i < exp.length; i++) {
        let c = exp[i];
        // If the character is an operand (number here),
        // push it to the stack.
        if (!isNaN(parseInt(c)))
            stack.push(c.charCodeAt(0) - '0'.charCodeAt(0));
        // If the character is an operator, pop two
        // elements from stack apply the operator
        else {
            let val1 = stack.pop();
            let val2 = stack.pop();
            switch (c) {
                case '+':
                    stack.push(val2 + val1);
                    break;
                case '-':
                    stack.push(val2 - val1);
                    break;
                case '/':
                    stack.push(val2 / val1);
                    break;
                case '*':
                    stack.push(val2 * val1);
                    break;
            }
        }
    }
    return stack.pop();
}
let exp = "521+*7/";
console.log("postfix evaluation: " + evaluatePostfix(exp));