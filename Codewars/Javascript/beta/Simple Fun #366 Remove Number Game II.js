function removeNumberGame(n,d){
    n=n.split('')
    let count = 0;
    for(let i=0; i<d; i++){
        i%2==0 ? n.pop() : n.shift()
        n=n.join('')
        if(isDivisible(n,d)){
            d--;
            count++
            n=n.split('')
        }
        console.log(n);
    }
    return count    
}

const isDivisible =(str, n) =>  Number(str)%n == 0


console.log(removeNumberGame("102045",4));