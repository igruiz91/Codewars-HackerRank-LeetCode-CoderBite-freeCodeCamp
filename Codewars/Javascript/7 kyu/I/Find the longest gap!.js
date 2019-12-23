function gap(num) {
    let n = num.toString(2).split('')
    while(n[n.length-1] == 0){
        n.pop()
    }
    return n.join('').split('1').sort().reverse()[0].length
}

console.log(gap(529));