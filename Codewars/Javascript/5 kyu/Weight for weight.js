function orderWeight(strng) {
    const red = str => str.split('').reduce((a,b) => a+ (+b),0)
    return strng.split(" ").sort((a,b) => red(a)-red(b) || a.localeCompare(b)).join(" ")
}

console.log(orderWeight("103 123 4444 11 99 2000"));