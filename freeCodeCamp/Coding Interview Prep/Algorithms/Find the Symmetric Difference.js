function sym(...args) {
  while(args.length>1){
    let a=args.shift();
    let b = args.shift();
    let c = a.filter(x=>!b.includes(x));
    let d = b.filter(x=>!a.includes(x));
    args.unshift(c.concat(d));
  }
  let resp = [...new Set(args[0])]
  return resp.sort((a,b) =>a-b);
}

function symUp(...args) {
  const diff = (arr1,arr2) => {
    return [
      ...arr1.filter((n) => !arr2.includes(n)),
      ...arr2.filter((n) => !arr1.includes(n)),
    ]
  }
  return [...new Set(args.reduce(diff))]
}

console.log(sym([1, 2, 3,3], [5, 2, 1, 4]))
console.log(symUp([1, 2, 3,3], [5, 2, 1, 4]))
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));
console.log(symUp([1, 2, 5], [2, 3, 5], [3, 4, 5]));
