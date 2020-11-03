function strongestEven(n, m){
    if(m%2 !=0) m--
    let strongest=0;
    let maxReps=0
    for(let i=m; i>=n; i-=2){
        let count=1;
        let value=i
        while(value%2==0){
            value/=2
            count++
        }
        if(count>=maxReps){
            maxReps=count;
            strongest=i
        } 
    }
    return strongest
}





console.log(strongestEven(540,1000));