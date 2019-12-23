function divisibleCount(x, y, k) {
    for(var i=y, count=0; i>=x; i-=k){
        if(i%k !=0){
            while(i%k!=0) {i--}
            count++
        }
        else count++
    }    
    return count
}

const divisibleCount2 = (x,y,k) => {
    var count=0;
   
    if(x%k != 0){
        while(x%k !=0) {
            x++
            if(x>=y) return 0
        }
        count++
    } 
    for(let i=x; i<=y; i+=k){
        count++
    }   
    return count
}

const divisibleCountUp = (x,y,k) =>{
    return Math.floor(y/k)-Math.floor((x-1)/k)
}

console.log(divisibleCountUp(11, 345, 17));