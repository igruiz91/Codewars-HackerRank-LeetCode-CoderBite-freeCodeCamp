function combine(...objects) {
  let resp ={}
  objects.forEach(obj => {
    for (const key in obj){
      resp[key] = (resp[key] || 0) + obj[key]
    }
  })
  return resp
}


const combineUp = (...params) =>
  params.reduce((a, b) => {
    for (const x in b) {
      a[x] = x in a ? a[x] + b[x] : b[x];
    }
    return a;
  }, {});

const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };


console.log(combine(objA, objB));
console.log(combine(objA, objB));
