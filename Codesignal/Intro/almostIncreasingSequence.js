function almostIncreasingSequence(sequence) {
  let count = 0;
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i-1]) {
      count ++
      if(sequence[i]<=sequence[i-2] && sequence[i+1] <= sequence[i-1]) return false
    }
  }
  return count <= 1;
}

// let a = [1, 3, 5, 2];
// let b = [1, 3, 2];
// let c = [1, 2, 1, 2];
// let d = [10, 1, 2, 3, 4, 5];
// let e = [1, 2, 3, 4, 3, 6];
let f = [1, 1, 1, 2, 3];

// console.log(almostIncreasingSequence(a));
// console.log(almostIncreasingSequence(b));
// console.log(almostIncreasingSequence(c));
// console.log(almostIncreasingSequence(d));
// console.log(almostIncreasingSequence(e));
console.log(almostIncreasingSequence(f));
