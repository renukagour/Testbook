function NodeInsertion(headA, headB) {
    if (headA === null || headB === null) {
        return null;
    }
    let currA = headA;
    let currB = headB;
    while (currA !== currB) {
        currA = currA.next;
        currB = currB.next;
        if (currA === currB) {
            return currA;
        }
        3
        if (currA === null) {
            currA = headB;
        }
        if (currB === null) {
            currB = headA;
        }
    }
    return currA;
}
// 4.
function isPalindrome(head) {
    var temp = head;
    var ispalin = true;
    var stack = [];
    while (temp != null) {
        stack.push(temp.data);
        temp = temp.next;
    }
    while (head != null) {
        var i = stack.pop();
        if (head.data == i) {
            ispalin = true;
        } else {
            ispalin = false;
            break;
        }
        head = head.next;
    }
    return ispalin;
}

// 5.
// function getCount(node head)
function getCount(head) {
    var temp = head;
    var count = 0;
    while (temp != null) {
        count++;
        temp = temp.next;
    }
    return count;
}
// function insertMiddle(node head, node n) 
function insertMiddle( head,  n) {
    var count = getCount(head);
    4
    count /= 2;
    var temp = head;
    while (count != 0) {
        count --;
        temp = temp.next;
    }
    n.next = temp.next;
    temp.next = n;
}

// 6.
function deleteDuplicate(list) {
    var track = {}; // map to track duplicates
    var temp = list.head;
    var prev = null;
    while (temp) {
        if (track[temp.data]) {
            prev.next = temp.next;
        } else {
            track[temp.data] = true;
            prev = temp;
        }
        temp = temp.next;
    }
    console.log(temp);
}

// 7.
function reverseSingleLinkedList(list) {
    var node = list.head;
    var prev = null;
    while (node) {
        var temp = node.next;
        node.next = prev;
        prev = node;
        if (!temp)
            break;
        node = temp;
    }
    return node;
}