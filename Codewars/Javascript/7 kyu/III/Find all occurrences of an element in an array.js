const findAll = (array, n) => {
  let resp = []
  for(let i=0; i<array.length; i++){
    if(array[i] == n) resp.push(i) 
  }
  return resp
};


const findAllUp = (arr, n) => {
  return arr.reduce((acc, curr, i) => {
    if(curr == n) acc.push(i)
    return acc
  },[])
}

const findAllUp2 = (arr, n) => {
  return arr.reduce((arr, curr, i) => curr == n ? [...arr, i] : arr, [])
};




console.log(findAll([6, 9, 3, 4, 3, 82, 11], 3));
console.log(findAllUp([6, 9, 3, 4, 3, 82, 11], 3));
console.log(findAllUp2([6, 9, 3, 4, 3, 82, 11], 3));

