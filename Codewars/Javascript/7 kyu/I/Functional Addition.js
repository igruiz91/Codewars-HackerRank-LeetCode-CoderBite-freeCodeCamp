function add(n) {
    return function(m){
         return n+m
    }
}

const addUp = a => b => a+b

console.log(addUp(1)(3));