Array.prototype.square = function(){
    return this.map(e => e*e)
}
Array.prototype.cube = function(){
    return this.map(e => e**3)
}
Array.prototype.average = function(){
    return this.reduce((a,b) => a+b,0)/this.length
}
Array.prototype.sum = function(){
    return this.reduce((a,b) => a+b,0)
}
Array.prototype.even = function(){
    return this.filter(e => e%2==0)
}
Array.prototype.odd = function(){
    return this.filter(e => e%2)
}

var numbers = [1, 2, 3, 4, 5];

console.log(numbers.odd());