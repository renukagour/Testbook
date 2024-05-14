class Node {
    constructor() {
        this.data = 0;
        this.next = null;
    }
}
var head;
function insert(root, item) {
    var temp = new Node();
    temp.data = item;
    temp.next = root;
    root = temp;
    return root;
}
function print(head) {
    while (head != null) {
        console.log(head.data + " ");
        head = head.next;
    }
}
function arrayToList(arr, n) {
    head = null;
    for (var i = n - 1; i >= 0; i--) {
        head = insert(head, arr[i]);
    }
    return head;
}
var arr = [2, 1, 332, 41, 25];
var n = arr.length;
var head = arrayToList(arr, n);
print(head);