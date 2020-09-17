function count(array){
    let resp = {}
    arr.map(e => resp[e] ? resp[e]++: resp[e]=1)
    return resp
}

const countUp = arr => arr.reduce((s,v)=> {return s[v] ? s[v]++ :s[v]=1,s},{})

//const {countBy: countUp2} = require('lodash');


let arr=['a', 'a', 'b', 'b', 'b']
console.log(countUp(arr));