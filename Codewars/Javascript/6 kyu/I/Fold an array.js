function foldArray(array, runs){
    let resp=[];
    let mid; 
    array.length%2==0 ? mid=array.length/2 : mid = Math.ceil(array.length/2 ) 
    console.log(mid);
    let newArray = array.slice(0, mid);
    let fold = array.slice(mid).reverse()
    for(let i=0; i<mid; i++){
        let comp = fold[i] 
        if(comp==undefined) comp = 0 
        resp.push(newArray[i]+comp)
    }
    return (runs ==1) ? resp : foldArray(resp, runs-1)
     
}

function foldArrayUp(a, n) {
    const r = [], c = [...a];
    while (c.length) r.push(c.pop() + (c.shift() || 0));
    return n - 1 ? foldArray(r, n - 1) : r;
}

console.log(foldArray([ 1, 2, 3, 4, 5 ], 2));


//[ -9, 9, -8, 8, 66, 23 ]
//[ 14, 75, 0 ]