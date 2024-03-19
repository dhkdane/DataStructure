// make node where store data

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// make link to connect node
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
}

let node1 = new ListNode(9);
//let node2 = new ListNode(4);
//let node3 = new ListNode(3);

let node2 = new ListNode(9);
let node3 = new ListNode(9);
let node4 = new ListNode(9);
let node5 = new ListNode(9);
let node6 = new ListNode(9);
let node7 = new ListNode(9);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;

let node11 = new ListNode(9);
//let node12 = new ListNode(6);
//let node13 = new ListNode(4);
//node4.next = node5;
//node5.next = node6;
let node12 = new ListNode(9);
let node13 = new ListNode(9);
let node14 = new ListNode(9);

node11.next = node12;
node12.next = node13;
node13.next = node14;

let list1 = new LinkedList(node1);
let list2 = new LinkedList(node11);
let current = list1.head;
let current2 = list2.head;

//console.log(current, current2);
// console.log(current.next);
while (current != null) {
  let sum = current.data + current2.data;

  if (sum > 9) {
    sum = sum - 10;
    if ((current.next = null)) {
      console.log("no more");
    } else {
      // current.next.data++;
    }
    console.log(sum);
    //console.log(current.next);
  }
  if (current.next == null) {
    let node = new ListNode(sum);
    current.next = node;
    console.log("last", current.next);
  } //console.log(sum);
  if (current2.next == null) {
    //  console.log("empty2", current2.next);
    let node = new ListNode(0);
    current2.next = node;
  }

  current = current.next;
  current2 = current2.next;
}
