function processData(data) {
  return data.reduce((a,b) => a * b.reduce((x, y) => x - y),1)
}

const processDataUp = (data) => {
  return data.reduce((a,[b,c]) => a *(b-c),1)
}

console.log(
  processData([
    [2, 5],
    [3, 4],
    [8, 7],
  ])
);
console.log(
  processDataUp([
    [2, 5],
    [3, 4],
    [8, 7],
  ])
);
