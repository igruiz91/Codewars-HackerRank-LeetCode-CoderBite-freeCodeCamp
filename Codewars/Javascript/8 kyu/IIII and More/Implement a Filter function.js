Array.prototype.filter = (fn) => {
    let arr = [];
    for(let i =0; i < this.length; i++){
        if(fn(this[i])) arr.push(this[i]);
    }
    return arr
}

Array.prototype.filter = function(fn) {
    const newArray = []
  
    for (let i = 0; i < this.length; i++) {
      if (fn(this[i])) newArray.push(this[i])
    }
  
    return newArray
}

console.log([1,2,34,4].filter(n => n>2));