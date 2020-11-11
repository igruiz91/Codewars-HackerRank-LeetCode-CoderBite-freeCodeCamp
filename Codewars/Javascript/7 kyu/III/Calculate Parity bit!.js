function checkParity(parity, bin){
    return parity=='even' ? Number(bin.length%2) : Number(bin.length%2==0)
}

console.log(checkParity('even','101010'));