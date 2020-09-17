function root(x, n) {
    let num=1
    while(num**n<=x){
        if(num**n==x) return num
        else num++
    }
    return "Wrong value"
}

const rootUp = (x,n) => Math.pow(x, 1/n)

console.log(root(256, 4));