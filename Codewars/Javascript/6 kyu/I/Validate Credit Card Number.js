function validate(n){
    let num= transform(n).map((n,i)=> i%2 ? +n*2 : +n).reverse().map(n => n>9 ? n-9 : n).reduce((a,b)=> a+b)%10
    return num===0
}

function transform(n) {
    return n.toString().split('').reverse()
}

console.log(validate(1230));