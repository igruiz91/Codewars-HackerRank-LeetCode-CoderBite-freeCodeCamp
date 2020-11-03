function Node(data, next) {
  this.data = data;
  this.next = next;
}

function sortedInsertTry(head, data) {
  let newNode = new Node(data)
  let previous;
  if(!head){
    return newNode
  }else if(head.data< data){
    newNode.next = head
    return newNode
  }
  while (head.data<data) {
    previous = head
    head = head.next
  }
  newNode.next = head
  previous.next = newNode
  return previous
}

function sortedInsert(head, data){
  if(!head || head.data>data) return new Node(data, head)
  else{
    head.next = sortedInsert(head.next, data)
    return head
  }
};


let n1 = new Node(1)
let n2 = new Node(2)
let n3 = new Node(4)
n2.next = n3
n1.next = n2

console.log(n1)

console.log(sortedInsert(n1, 3));