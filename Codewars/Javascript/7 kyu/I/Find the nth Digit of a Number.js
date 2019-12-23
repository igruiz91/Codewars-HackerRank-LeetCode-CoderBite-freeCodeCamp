var findDigit = (num, nth) => {
    num = `${Math.abs(num)}`
    let len = num.length
    let n= Number(num.slice(len-nth,len-nth+1))
    return n
}

console.log(findDigit(5673, 4));