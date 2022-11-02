class contact {
  constructor(name, number) {
    this.name = name;
    this.number = number;
  }
  print() {
    console.log(this.name + ":" + this.number);
  }
}

var a = new contact("David", 12345);
var b = new contact("Amy", 987654321);
a.print();
b.print();
