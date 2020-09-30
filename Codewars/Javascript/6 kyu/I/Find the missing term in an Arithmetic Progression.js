var findMissing = function (list) {
    let c =Number.MAX_SAFE_INTEGER;
    let posible=0;
    
    let d = list.slice(0,3)
    for(let i=0; i<d.length-1;i++){
        posible = Math.abs(list[i]-list[i+1])
        if(posible<c){
            c=posible;
        }
    }
    for(let j=0; j<list.length; j++){
        if(list[j+1] !=list[j]+c)
        return list[j]+c
    }  
}

var findMissing=(l)=>{
    return ((l[0]+l[l.length-1])*(l.length+1))/2-l.reduce((a,b)=>a+b)
}
console.log(findMissing([1, 3, 4]));