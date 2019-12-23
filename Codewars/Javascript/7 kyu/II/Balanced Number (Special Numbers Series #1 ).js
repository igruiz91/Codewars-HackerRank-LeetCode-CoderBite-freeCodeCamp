function balancedNum(number){
    if(number<100) return "Balanced"
    let left =[], right=[];
    number= ''+number;
    if(number.length % 2){
        left = number.slice(0,number.length/2).split('').map(Number)
        right = number.slice(number.length/2+1).split('').map(Number)
    }else{
        left = number.slice(0,number.length/2-1).split('').map(Number)
        right = number.slice(number.length/2+1).split('').map(Number)
    }
    return right.reduce((a,b)=>a+b) === left.reduce((a,b)=>a+b,0) ? "Balanced" : "Not Balanced"
}





console.log(balancedNum(432));