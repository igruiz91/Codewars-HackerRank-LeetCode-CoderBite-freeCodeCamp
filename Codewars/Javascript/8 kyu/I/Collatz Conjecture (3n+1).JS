var hotpo = function(n){
    let count=0
    if(n == 1) return count;
    n%2==0 ? count+= hotpo(n/2) +1 : count+=hotpo(3*n+1, count++)+1
    return count 
}

var hotpoUp = n => n ==1 ? 0 : 1+ hotpoUp(n%2==0 ? n/2 : 3*n+1)

console.log(hotpo(6));
console.log(hotpoUp(6));