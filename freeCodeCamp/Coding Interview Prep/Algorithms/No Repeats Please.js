const permAlone = (str) => {
  const len = str.length;
  const strArr = str.split('');
  let permutations = [];
  const heapAlgorithm = (len, arr) => {
    if (len === 1) permutations.push(arr.slice().join(''));
    else {
      for (let i = 0; i < len; i++) {
        heapAlgorithm(len - 1, arr);
        if (len % 2 == 0) [arr[i], arr[len - 1]] = [arr[len - 1], arr[i]];
        else [arr[0], arr[len - 1]] = [arr[len - 1], arr[0]];
      }
    }
  };
  const countRepeatChar = (str) => /(.)\1/.test(str)

  heapAlgorithm(len, strArr);
  console.log(permutations)
  return permutations.reduce((acc, curr) => {
    countRepeatChar(curr) ? acc : acc++;
    return acc
  }, 0)
}


console.log(permAlone('aabb'));
console.log(permAlone("aab"));
//console.log(permAlone("abcdefa"));
// console.log(permAlone("abfdefa"));

