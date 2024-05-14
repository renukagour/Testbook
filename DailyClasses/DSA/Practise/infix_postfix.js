function prec(c) {
    if (c == '^')
        return 3;
    else if (c == '/' || c == '*')
        return 2;
    else if (c == '+' || c == '-')
        return 1;
    else
        return -1;
}
function infixToPostfix(s) {
    let st = [];
    let result = "";
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        // If the character is
        // an operand, add it to output string.
        if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c
            >= '0' && c <= '9'))
            result += c;
        // If the character is an
        // ‘(‘, push it to the stack.
        else if (c == '(')
            st.push('(');
        // If the character is an ‘)’,
        // pop and to output string from the stack
        // until an ‘(‘ is encountered.
        else if (c == ')') {
            while (st[st.length - 1] != '(') {
                result += st[st.length - 1];
                st.pop();
            }
            st.pop();
        }
        //If an operator is there
        else {
            while (st.length != 0 && prec(s[i]) <=
                prec(st[st.length - 1])) {
                result += st[st.length - 1];
                st.pop();
            }
            st.push(c);
        }
    }
    // Pop all the remaining elements from the stack
    while (st.length != 0) {
        result += st[st.length - 1];
        st.pop();
    }
    console.log(result );
}
let exp = "a+b*(c^e-f)";
infixToPostfix(exp)