function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  let count = 0;
  while (head) {
    head = head.next;
    count++;
  }
  return count;
}

function count(head, data) {
  // Your code goes here.
  let count = 0;
  while (head) {
    if (head.data == data) count++;
    head = head.next;
  }
  return count;
}
