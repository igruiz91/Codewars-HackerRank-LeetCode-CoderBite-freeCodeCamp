function animals(heads, legs){
    let y = (legs-(2*heads))/2
    let x= (legs-4*y)/2
    return (x%1 !=0 || y%1 != 0) ? 'No solutions' :[x, y]
}

console.log(animals(72, 200));

//x+y=heads
//2x+4y=legs
//x=chickens, y=cows