function fareySequence(n, m) {
  let farey = {1:'0/1', 2:'1/5', 3:' 1/4', 5:' 1/3', 6:'2/5', 7:'1/2', 8:'3/5', 9:'2/3', 10:'3/4', 11:'4/5', 12:'1/1'}

  return farey[(m%12)+1]
}

console.log(28%12);


console.log(fareySequence(5, 7));

