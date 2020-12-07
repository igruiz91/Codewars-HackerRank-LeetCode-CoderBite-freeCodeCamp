var flatten = function (array) {
  let resp = [];
   array.map((e) =>Array.isArray(e) ? e.map((c) => resp.push(c)) : resp.push(e));
  return resp;
};


const flattenUp = (array) => {
  return [].concat.apply([],array)
}

const flattenUp2 = (array) => {
  return array.reduce((a,b) => a.concat(b), [])
}

const flattenUp3 = (arr) => {
  return [].concat(...arr)
}




console.log(flatten([[1, 2, 3],["a", "b", "c"],[1, 2, 3]]));
console.log(flattenUp([[1, 2, 3],["a", "b", "c"],[1, 2, 3]]));
console.log(flattenUp2([[1, 2, 3],["a", "b", "c"],[1, 2, 3]]));
console.log(flattenUp3([[1, 2, 3],["a", "b", "c"],[1, 2, 3]]));
console.log(flatten([1, 2, 3]));
console.log(flattenUp([1, 2, 3]));
console.log(flattenUp3([1, 2, 3]));
