function partition(head, x) {
    var smallerHead = null, smallerLast = null;
    var greaterLast = null, greaterHead = null;
    var equalHead = null, equalLast = null;
    while (head != null) {
        if (head.data == x) {
            if (equalHead == null)
                equalHead = equalLast = head;
            else {
                equalLast.next = head;
                equalLast = equalLast.next;
            }
        }
        else if (head.data < x) {
            if (smallerHead == null)
                smallerLast = smallerHead = head;
            else {
                smallerLast.next = head;
                smallerLast = head;
            }
        } else {
            if (greaterHead == null)
                greaterLast = greaterHead = head;
            else {
                greaterLast.next = head;
                greaterLast = head;
            }
        }
        head = head.next;
    }
    if (greaterLast != null)
        greaterLast.next = null;
    if (smallerHead == null) {
        if (equalHead == null)
            return greaterHead;
        equalLast.next = greaterHead;
        return equalHead;
    }
    if (equalHead == null) {
        smallerLast.next = greaterHead;
        return smallerHead;
    }
    smallerLast.next = equalHead;
    equalLast.next = greaterHead;
    return smallerHead;
}