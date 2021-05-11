function bigToSmall(arr) {
  return arr.reduce((a,b) => a.concat(b)).sort((a,b) => b-a);
}

const bigToSmallUp = (arr) => {
  return [].concat(...arr).sort((a,b) => b-a).join('>')
};



console.log(bigToSmall([[1, 1], [1], [1, 1]]));
console.log(bigToSmallUp([[1, 1], [1], [1, 1]]));