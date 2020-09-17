const arrCheck = value => value.every(e => Array.isArray(e))

console.log(arrCheck([[1],2]));