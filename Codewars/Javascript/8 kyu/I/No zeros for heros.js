function noBoringZeros(n) {
    let i=0;
    n = `${n}`.split('').reverse();
    while(n[i]==0){
        n[i]=''
        i++
    }
    return Number(n.reverse().join(''))
}

function noBoringZerosUp(n) {
    while(n%10 == 0 && n!=0)
        n/=10
    return n
}

function noBoringZerosUp2(n) {
    return `${n}`.replace(/0*$/, "")
}

console.log(noBoringZerosUp2(1405000));