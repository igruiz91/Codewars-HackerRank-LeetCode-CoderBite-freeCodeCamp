class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //insert first node
  insertFirst(data){
    this.head = new Node(data, this.head)
    this.size ++
  }
  //insert last node
  insertLast(data){
    let node = new Node(data)
    let current;
    //if empty, make head
    if(!this.head){
      this.head = node
    }else{
      current = this.head;

      while(current.next){
        current = current.next
      }

      current.next = node
    }
    this.size++
  }
  //insert at index
  insertAt(data, index){
    //case out of range
    if (index > 0 && index > this.size) {
      return;
    }
    if(index === 0){
      this.head = new Node(data, this.head)
      return
    }

    const node = new Node(data)
    let current, previous;
    //set current to first
    current = this.head;
    let count = 0;

    while(count<index){
      previous = current
      current = current.next
      count++
    }
    node.next = current
    previous.next = node;

    this.size++
  }
  //get at index
  getAt(index){
    let current = this.head
    let count=0
    while(count<index){
      current = current.next
      count++
    }
    console.log(current.data)
    return
  }
  //remove a index
  removeAt(index){
    if(index> 0 && index > this.size){
      return
    }
    let current = this.head;
    let previous;
    let count = 0
    if(index === 0) {
      this.head = current.next
    }else{
      while (count<index) {
        previous = current
        current = current.next
        count++
      }
      previous.next = current.next
    }

    this.size--
  }
  // clear list
  clear(){
    this.head = null
    this.size = 0
  }
  // print list data
  printListData(){
    let current = this.head;

    while(current){
      console.log(current.data);
      current = current.next
    }
  }
}

const ll = new LinkedList()

ll.insertFirst(3)
ll.insertFirst(2)
ll.insertFirst(1)

ll.removeAt(0)

ll.printListData()
ll.getAt(1)

//console.log(ll);
