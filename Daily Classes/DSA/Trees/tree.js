function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}
function show() {
    return this.data;
}
function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
}
function insert(data) {
    var n = new Node(data, null, null);
    if (this.root == null) {
        this.root = n;
    }
    else {
        var current = this.root; var parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left; if (current == null) {
                    parent.left = n;
                    break;
                }
            } else {
                current = current.right;
                if (current == null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}

function inOrder(node) {
    if (!(node == null)) {
        inOrder(node.left);
        console.log(node.show());
        inOrder(node.right);
    }
}

function preOrder(node) {
    if (!(node == null)) {
        console.log(node.show());
        preOrder(node.left);
        preOrder(node.right);
    }
}

function postOrder(node) {
    if (!(node == null)) {
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.show());
    }
}

// A level-order traversal visits each node level by level from left to right before any nodes in their
// subtrees with the help of queue data structure.
function levelOrder() {
    var queue = [];
    queue.push(root);
    while (queue.length != 0) {
        var tempNode = queue.shift();
        console.log(tempNode.data);
        /* Enqueue left child */
        if (tempNode.left != null) {
            queue.push(tempNode.left);
        }
        /* Enqueue right child */
        if (tempNode.right != null) {
            queue.push(tempNode.right);
        }

    }
}

// Searching for A Value In BST
function find(data) {
    var current = this.root;
    while (current.data != data) {
        if (data < current.data) { current = current.left; }
        else { current = current.right; }
        if (current == null) { return null; }
    }
    return current;
}

