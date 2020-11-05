function shortestStepsToNum(num) {
    let count=0
    while(num>1)
        if(num%2==0){num/=2; count++}
        else{ num-=1; count++ }
    return count
}

function shortestStepsToNumUp(n){
    let it=0
    while(n>1)
        n%2==0 ? n/=2 : n--, it++;
    return it
}

console.log(shortestStepsToNumUp(16));
console.log(shortestStepsToNum(16));