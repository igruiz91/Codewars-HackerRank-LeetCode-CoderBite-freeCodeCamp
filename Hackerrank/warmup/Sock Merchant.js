function sockMerchant(ar, n) {
    let pares=[]
    for(let i=0; i<n; i++){
        pares.push(ar.filter(n => {
           return n==ar[i]
        }))
    }
    return pares
}


console.log(sockMerchant([1,2,1,2,1,3,2],7));