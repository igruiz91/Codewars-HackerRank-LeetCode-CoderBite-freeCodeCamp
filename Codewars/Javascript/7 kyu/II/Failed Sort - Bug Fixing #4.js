var sortArray = function (value) {
  return value
    .split("")
    .sort((c, p) => c - p)
    .join("");
};

const sortArrayUp = (arr) => [...arr].sort().join()


console.log(sortArray("12345"));
console.log(sortArray("54321"));
