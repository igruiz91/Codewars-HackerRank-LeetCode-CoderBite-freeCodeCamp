function solve(arr) {
  let clearArr = arr.map((a) => [...new Set(a)]);
  const combinations = (current, index) => {
    if (index === clearArr.length) {
      uniqueCombination.add(current.slice());
      return;
    }
    for (let i = 0; i < clearArr[index].length; i++) {
      current.push(clearArr[index][i]);
      combinations(current, index + 1);
      current.pop();
    }
  };
  const uniqueCombination = new Set();

  combinations([], 0);
  return uniqueCombination.size;
}


const solveUp = (arr) => {
  return arr.map(v=> new Set(v).size).reduce((acc, val) =>acc*val,1)
 }
//console.log(solve([[1, 2], [4], [5, 6]]));
console.log(solve([ [ 1, 2 ], [ 4, 4 ], [ 5, 6, 6 ] ]));
console.log(solveUp([ [ 1, 2 ], [ 4, 4 ], [ 5, 6, 6 ] ]));
