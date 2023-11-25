function sortList(sortBy, list) {
  return list.sort((a, b) => {
    if (a[sortBy] > b[sortBy]) return -1;
    else if (a[sortBy] < b[sortBy]) return 1;
    else return 0;
  });
}

const sortListUp = (sortBy, list) => {
  return list.sort((a, b) => b[sortBy] - a[sortBy]);
};

console.log(
  sortList("b", [
    { a: 1, b: 3 },
    { a: 3, b: 2 },
    { a: 2, b: 40 },
    { a: 4, b: 12 },
  ])
);

console.log(
  sortListUp("b", [
    { a: 1, b: 3 },
    { a: 3, b: 2 },
    { a: 2, b: 40 },
    { a: 4, b: 12 },
  ])
);
