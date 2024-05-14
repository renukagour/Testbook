function isParenthesisValid(validationString) {
    var stack = new Stack();
    for (var pos = 0; pos < validationString.length; pos++) {
        var currentChar =validationString.charAt(pos);
        if (currentChar == "(") {
            stack.push(currentChar);
        } else if (currentChar == ")") {
            if (stack.isEmpty())
                return false;
            stack.pop();
        }
    }
    return stack.isEmpty();
}
isParenthesisValid("((()"); // false;
isParenthesisValid("()()"); // true;