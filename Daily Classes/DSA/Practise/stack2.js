let mainStack = [];
let trackStack = [];
function push(x) {
    mainStack.push(x);
    if (mainStack.length == 1) {
        trackStack.push(x);
        return;
    }
    // If current element is greater than
    // the top element of track stack, push
    // the current element to track stack
    // otherwise push the element at top of
    // track stack again into it.
    if (x > trackStack[trackStack.length - 1])
        trackStack.push(x);
    else
        trackStack.push(trackStack[trackStack.length - 1]);
}
function getMax() {
    return trackStack[trackStack.length - 1];
}
function pop() {
    mainStack.pop();
    trackStack.pop();
}
push(50);
console.log(getMax() + "</br>");
push(70);
console.log(getMax() + "</br>");
push(80);
console.log(getMax());