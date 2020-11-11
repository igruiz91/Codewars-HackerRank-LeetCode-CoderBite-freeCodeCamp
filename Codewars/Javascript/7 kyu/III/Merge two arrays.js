function mergeArrays(a, b) {
    let resp =[]
    while(a.length || b.length){
        if(a.length) resp.push(a.shift()) 
        if(b.length) resp.push(b.shift())
    }
    return resp
}

const _ = require('lodash')

function mergeArrays(a, b) {
  return _.compact(_.flatten(_.zip(a, b)))
}

console.log(mergeArrays([1, 2, 3], ['a', 'b', 'c', 'd', 'e']));