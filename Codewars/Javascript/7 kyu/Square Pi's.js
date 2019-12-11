function squarePi(digits){
    let pi='31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679'.slice(0,digits)
    return Math.ceil(Math.sqrt(pi.split('').reduce((a,b)=>a+b*b,0)))
}

console.log(squarePi(3));