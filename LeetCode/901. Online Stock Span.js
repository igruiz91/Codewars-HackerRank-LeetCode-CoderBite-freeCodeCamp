class StockSpanner{
  constructor(stack){
    this.stack = []
  }
}


StockSpanner.prototype.next = function (price) {
  let resp = 1
  while (this.stack && this.stack[this.stack.length-1]<=price){
    resp+= this.stack.pop()[1]
  }

  return resp
};



let price = [[],100, 80, 60, 70,]
var obj = new StockSpanner()
var param_1 = obj.next(price)

console.log(param_1)
