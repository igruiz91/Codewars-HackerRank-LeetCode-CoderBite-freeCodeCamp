function one(arr, fun) {
  return arr.map(e => fun(e)).filter(e => e ==true).length==1
}

function oneUp(arr, fun) {
  return arr.filter(fun)===1
}

let a = [1, 2, 3, 4, 5];
function fn(item){ 
  return item>0
}
console.log(one(a, fn))
console.log(oneUp(a, fn));

