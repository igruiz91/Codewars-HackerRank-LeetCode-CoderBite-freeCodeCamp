function isPowerOfTwo(n){
    while(n>1)
        n/=2
    return n==1
}


console.log(isPowerOfTwo(5));