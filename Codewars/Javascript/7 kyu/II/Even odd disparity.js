function solve(a) {
  return a.reduce((a,b) => Number.isInteger(b) ? b%2 ? a+=1 : a-=1 : a, 0);
}

console.log(solve([0, 1, 2, 3, "a", "b"]));
console.log(solve([5, 15, 16, 10, 6, 4, 16, 't', 13, 'n', 14, 'k', 'n', 0, 'q', 'd', 7, 9]));
