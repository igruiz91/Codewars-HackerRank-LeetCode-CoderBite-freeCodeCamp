const removeConsecutiveDuplicates = (s) => {
  return s
    .split(" ")
    .filter((w, i, arr) => (arr[i + 1] == w ? "" : w))
    .join(" ");
};

//alpha beta gamma delta alpha beta gamma delta
//alpha beta gamma delta alpha beta gamma delta
console.log(
  removeConsecutiveDuplicates(
    "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
  )
);
