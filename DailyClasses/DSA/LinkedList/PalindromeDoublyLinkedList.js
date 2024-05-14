class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}
class DoublyLinkedList {

    constructor() {
        this.head = null;

    }

    insertAtHead(value) {

        let newNode = new Node(value);
        // if list is empty , newnode will become head
        if (this.head == null) {
            this.head = newNode;
            return;
        }
        //make links
        newNode.next = this.head;
        this.head.prev = newNode;
        // change the head
        this.head = newNode;
    }

    insertAtTail(value) {
        // create new node
        let newNode = new Node(value);

        //  check is linked list is empty
        if (this.head == null) {
            this.head = newNode;
            return;
        }
        //traverse last node
        let temp = this.head;
        while (temp.next != null) {
            temp = temp.next;
        }
        //  temp has reached the last node
        temp.next = newNode;
        newNode.prev = temp;
    }

    deleteHead() {
        if (this.head == null) {
            console.log("Linked list is empty can not delete");
            return;
        }
        if (this.head.next == null) {
            this.head = null;
            return;
        }

        // move head
        this.head = this.head.next;
        this.head.prev = null;

    }

    deleteTail() {
        //    if only head present then head become null or not any node present

        if (this.head == null) {
            console.log("Linked list is empty can not delete");
            return;
        }
        if (this.head.next == null) {
            this.head = null;
            return;
        }

        let temp = this.head;
        //reach the second last node
        while (temp.next.next != null) {

            temp = temp.next;
        }
        // temp is the second last node
        temp.next = null;
    }

    print() {
        let temp = this.head;
        while (temp != null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }

    checkPalindrome() {
        let start = this.head;
        let end = this.head;
        while (end.next != null) {
            end = end.next;
        }
        while (start != null) {
            if (start.data != end.data)
                return false;
            start = start.next;
            end = end.prev;
        }
        // all nodes are checked
        return true;
    }


}

let l1 = new DoublyLinkedList();
l1.insertAtTail(1); //1
l1.insertAtTail(2);
l1.insertAtTail(3);
l1.insertAtTail(3);
l1.insertAtTail(1);
l1.print();
console.log(l1.checkPalindrome());