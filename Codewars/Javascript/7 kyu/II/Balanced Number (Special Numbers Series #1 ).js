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


function balancedNumUp(number) {
    let str = `${number}`
    ,   len = (str.length - (str.length % 2 ? -1 : -2)) / 2
    ,   sum = digits => [ ...digits ].reduce((a, b) => a + +b, 0);
  
    return sum(str.slice(0, len)) === sum(str.slice(-len)) 
    ? 'Balanced' 
    : 'Not Balanced';
  
  }

  const balancedNumUp2 = n => {
    var str = `${n}`;
    return Array.from({length:(str.length-1)/2}, (_,i) => str[i]-str[str.length-1-i])
                .reduce((p, c) => p+c, 0) == 0 ? "Balanced" : "Not Balanced";
  }


console.log(balancedNum(432));