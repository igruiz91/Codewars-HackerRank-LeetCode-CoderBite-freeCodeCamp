function permutations(string) {
  string = string.split("");
  let result = [];
  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  };
  permute(string);

  return [...new Set(result.map((arr) => arr.join("")))];
}

const permutationsUp = (str) => {
  return str.length == 1
    ? [str]
    : str
        .split("")
        .map((e, i) =>
          permutationsUp(str.slice(0, i) + str.slice(i + 1)).map((e2) => e + e2)
        )
        .reduce((acc, curr) => acc.concat(curr)).sort()
        .filter((e, i, a) => i == 0 || a[i - 1] != e);
};

const permutationsUpM = (str) => {
  return str.length == 1
    ? [str]
    : [
        ...new Set(
          str
            .split("")
            .map((e, i) =>
              permutationsUp(str.slice(0, i) + str.slice(i + 1)).map(
                (e2) => e + e2
              )
            )
            .reduce((acc, curr) => acc.concat(curr))
        ),
      ];
}

console.log(permutations("aabb"));
console.log(permutationsUp("aabb"));
