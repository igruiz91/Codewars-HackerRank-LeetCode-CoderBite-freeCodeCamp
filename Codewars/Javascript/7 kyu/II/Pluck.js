function pluck(objs, name) {
  let resp = []
  objs.forEach((k) => {
    resp.push(k[name] || undefined)
  });
  return resp
}


const pluckUp = (objs, name) =>  objs.map(obj => obj[name]) 

console.log(pluck([{ a: 1 }, { a: 2 }], 'a'));
console.log(pluckUp([{ a: 1 }, { a: 2 }], 'a'));
console.log(pluck([{ a: 1, b: 3 }, { a: 2 }], "b"));
console.log(pluckUp([{ a: 1, b: 3 }, { a: 2 }], "b"));
