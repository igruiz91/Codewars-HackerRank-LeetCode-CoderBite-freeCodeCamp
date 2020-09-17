snail = function(arr) {
    let resp = [];
    do{
        resp=resp.concat(arr.shift())
        console.log(resp);
        arr = snailRotate(arr)
        console.log(arr);
    }while(arr.length)
    return resp
}

snailRotate = function(array) {
    let copy = []
    for(let i=0, rows=array.length; i<rows; i++){
        let cols = array[i].length;
        for(let j = 0; j<cols; j++){
            if(copy[cols-1-j]=== undefined) copy[cols-1-j]=[];
            copy[cols-1-j][i]=array[i][j]
        }
    }
    return copy
}

const snailUp = array => {
    var resp;
    while(array.length){
        resp = (resp ? resp.concat(array.shift()) : array.shift())
    
        for(let i =0; i< array.length; i++){
            resp.push(array[i].pop())
        }
        resp = resp.concat((array.pop() || []).reverse())
        for(let i=array.length-1; i>=0; i--){
            resp.push(array[i].shift())
        }
    }
    return resp
}

const snailUp2 = arr => {
    var vector = []
    while(arr.length){
        vector.push(...arr.shift());
        arr.map(row => vector.push(row.pop()))
        arr.reverse().map(row => row.reverse())
    }
    return vector
}

const _ = require("lodash");

snailLodash = function(array) {
  var res = [];
  while (array.length)
  {
    res.push(...array.shift());
    array = _.zip(...array).reverse();
  }
  return res;
}

//console.log(snailRotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(snailUp2([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));