const deleteDigitTry = (n) => {
  n = `${n}`.split("");
  let resp = [];

  const permutations = (arr, a = []) => {
    if (!arr.length) {
      resp.push(a);
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      let curr = arr.slice();
      let next = curr.splice(i, 1);
      permutations(curr, a.concat(next));
    }
  };

  permutations(n);
  let nums = resp.map((a) => +a.slice(0, a.length - 1).join(""));
  return Math.max(...nums);
};

console.log(combinations(1234));
