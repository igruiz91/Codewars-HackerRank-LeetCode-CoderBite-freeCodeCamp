function Node(data) {
  this.data = data;
  this.next = null;
}

function append(listA, listB) {
  if (!listA) return listB;
  listA.next = append(listA.next, b);
  return listA;
}
