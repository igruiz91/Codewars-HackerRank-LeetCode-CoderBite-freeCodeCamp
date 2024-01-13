function Node(data) {
  this.data = data;
  this.next = null;
}

function push(head, data) {
  const newNode = new Node(data);
  newNode.next = head;
  return newNode;
}

function buildOneTwoThree() {
  let linkedList = null
  linkedList.push(linkedList, 3)
  linkedList.push(linkedList, 2)
  linkedList.push(linkedList, 1)
  return linkedList;
}

