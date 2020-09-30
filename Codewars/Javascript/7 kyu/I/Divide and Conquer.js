function divCon(x){
    return x.reduce((a,b) => typeof b == 'number' ? a+b : a-+b, 0)
}

console.log(divCon([9, 3, '7', '3']));