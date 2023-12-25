function Node(data, next = null) {
  this.data = data;
  this.next = next;
}
function indexOf(head, value) {
  let index = 0;
  let current = head;

  while (current !== null) {
    if (current.data === value) {
      return index;
    }

    current = current.next;
    index++;
  }

  return -1;
}
