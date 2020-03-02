function productArray(numbers){
    for (var i = 0, resp = []; i < numbers.length; i++) {
        let copy = [...numbers]
        copy.splice(i,1)
        resp.push(copy.reduce((a,b)=> a*b))
    }
    return resp
}

const productArrayUp = numbers =>{
    return numbers.map(n => numbers.reduce((a,b)=> a*b)/n)
}

console.log(productArray([3,27,4,2]));
console.log(productArrayUp([3,27,4,2]));